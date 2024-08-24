import React, { useRef, useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const VideoChat: React.FC = () => {
    const localVideoRef = useRef<HTMLVideoElement>(null);
    const remoteVideoRef = useRef<HTMLVideoElement>(null);
    const [localStream, setLocalStream] = useState<MediaStream | null>(null);
    const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
    const [peerConnection, setPeerConnection] = useState<RTCPeerConnection | null>(null);

    const config: RTCConfiguration = {
        iceServers: [
            {
                urls: 'stun:stun.l.google.com:19302'
            }
        ]
    };

    useEffect(() => {
        console.log(navigator);
        
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                setLocalStream(stream);
                if (localVideoRef.current) {
                    localVideoRef.current.srcObject = stream;
                }
                socket.emit('ready');
            })
            .catch(error => {
            if (error.name === 'NotAllowedError') {
                alert('Permission to access camera and microphone was denied.');
            } else if (error.name === 'NotFoundError') {
                alert('No camera/microphone found.');
            } else if (error.name === 'NotReadableError') {
                alert('The device is already in use by another application.');
            } else {
                console.error('Error accessing media devices:', error);
            }
        });


        socket.on('offer', handleOffer);
        socket.on('answer', handleAnswer);
        socket.on('candidate', handleCandidate);

        return () => {
            socket.off('offer', handleOffer);
            socket.off('answer', handleAnswer);
            socket.off('candidate', handleCandidate);
        };
    }, []);

    const handleOffer = (offer: RTCSessionDescriptionInit) => {
        const pc = new RTCPeerConnection(config);
        setPeerConnection(pc);

        pc.addStream(localStream as MediaStream);
        pc.setRemoteDescription(new RTCSessionDescription(offer));

        pc.createAnswer()
            .then(answer => {
                pc.setLocalDescription(answer);
                socket.emit('answer', answer);
            });

        pc.onaddstream = (event) => {
            if (remoteVideoRef.current) {
                remoteVideoRef.current.srcObject = event.stream;
            }
            setRemoteStream(event.stream);
        };

        pc.onicecandidate = (event) => {
            if (event.candidate) {
                socket.emit('candidate', event.candidate);
            }
        };
    };

    const handleAnswer = (answer: RTCSessionDescriptionInit) => {
        peerConnection?.setRemoteDescription(new RTCSessionDescription(answer));
    };

    const handleCandidate = (candidate: RTCIceCandidateInit) => {
        peerConnection?.addIceCandidate(new RTCIceCandidate(candidate));
    };

    useEffect(() => {
        if (!peerConnection && localStream) {
            const pc = new RTCPeerConnection(config);
            setPeerConnection(pc);

            pc.addStream(localStream as MediaStream);

            pc.createOffer()
                .then(offer => {
                    pc.setLocalDescription(offer);
                    socket.emit('offer', offer);
                });

            pc.onaddstream = (event) => {
                if (remoteVideoRef.current) {
                    remoteVideoRef.current.srcObject = event.stream;
                }
                setRemoteStream(event.stream);
            };

            pc.onicecandidate = (event) => {
                if (event.candidate) {
                    socket.emit('candidate', event.candidate);
                }
            };
        }
    }, [localStream]);

    return (
        <div>
            <h1>WebRTC Video Chat</h1>
            <video ref={localVideoRef} autoPlay muted style={{ width: '300px' }}></video>
            <video ref={remoteVideoRef} autoPlay style={{ width: '300px' }}></video>
        </div>
    );
};

export default VideoChat;
