
import React from "react";



function Teste(props) {


    return (
        <>
           
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link active"
                        id="home-tab"
                        data-mdb-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                    >Home</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="profile-tab"
                        data-mdb-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                    >Profile</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="messages-tab"
                        data-mdb-toggle="tab"
                        href="#messages"
                        role="tab"
                        aria-controls="messages"
                        aria-selected="false"
                    >Messages</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="settings-tab"
                        data-mdb-toggle="tab"
                        href="#settings"
                        role="tab"
                        aria-controls="settings"
                        aria-selected="false"
                    >Settings</a
                    >
                </li>
            </ul>

            
            <div class="tab-content">
                <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    ...
                </div>
                <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    ...
                </div>
                <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
                    ...
                </div>
                <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                    ...
                </div>
            </div>
        </>
    );
}

export default Teste;
