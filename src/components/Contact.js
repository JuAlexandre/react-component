import React from 'react';

import './Contact.css';

const Contact = ({ name, avatar, online }) => {
    return (
        <div className="Contact">
            <img className="avatar" alt="avatar" src={avatar} />
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    {online ?
                        <div>
                            <span className="status-online"></span>
                            <span>online</span>
                        </div> :
                        <div>
                            <span className="status-offline"></span>
                            <span>offline</span>
                        </div>
                        }
                </div>
            </div>
        </div>
    )
};

export default Contact;
