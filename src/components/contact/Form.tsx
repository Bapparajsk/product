"use client";
import {ChangeEvent, useEffect, useRef} from "react";
import { Toaster, toast } from "sonner";

const Form = () => {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        nameRef.current!.focus();
    }, []);

    const handleSubmit = () => {
        const [name, email, message] = [nameRef.current!.value, emailRef.current!.value, messageRef.current!.value];

        if (name === "" || email === "" || message === "") {
            toast.error("Please fill all the fields");
            return;
        }
        console.table({name, email, message});
        // // TODO - Send email to the server
        toast.success("Email sent successfully");
    }

    const handleCancel = () => {
        emailRef.current!.value = "";
        nameRef.current!.value = "";
        messageRef.current!.value = "";
    }

    function resizeTextarea(event: ChangeEvent<HTMLTextAreaElement>) {
        const textarea = event.target;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    }

    return (
        <div className="container">
            <div className="screen">
                <Toaster
                    position="bottom-right"
                    richColors
                />
                <div className="screen-header">
                    <div className="screen-header-left">
                        <div className="screen-header-button close"></div>
                        <div className="screen-header-button maximize"></div>
                        <div className="screen-header-button minimize"></div>
                    </div>
                    <div className="screen-header-right">
                        <div className="screen-header-ellipsis"></div>
                        <div className="screen-header-ellipsis"></div>
                        <div className="screen-header-ellipsis"></div>
                    </div>
                </div>
                <div className="screen-body">
                    <div className="screen-body-item left">
                        <div className="app-title">
                            <span>CONTACT</span>
                            <span>US</span>
                        </div>
                        <div className="app-contact">CONTACT INFO : bapparajsk97@gmail.com</div>
                    </div>
                    <div className="screen-body-item">
                        <div className="app-form">
                            <div className="app-form-group">
                                <input className="app-form-control" placeholder="NAME" value="Bapparaj sk"/>
                            </div>
                            <div className="app-form-group">
                                <input ref={nameRef} className="app-form-control" type={"text"} placeholder="Your Name"/>
                            </div>
                            <div className="app-form-group">
                                <input ref={emailRef} className="app-form-control" type={"email"} placeholder="Your Email"/>
                            </div>
                            <div className="app-form-group message">
                                <textarea ref={messageRef} className="app-form-control" placeholder="MESSAGE" onInput={resizeTextarea}></textarea>
                            </div>
                            <div className="app-form-group buttons">
                                <button onClick={handleCancel} className="app-form-button">CANCEL</button>
                                <button onClick={handleSubmit} className="app-form-button">SEND</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;