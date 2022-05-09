import styled from "styled-components";
import AuthService from "../../services/auth.service";
import moment from 'moment'
import useGeoLocation from "../../hooks/useGeoLocation";
import React,  {useEffect, useState} from "react";
import {useDispatch , useSelector} from "react-redux"
import {Delete_Talks, Send_Message, GetTalks} from "../../Js/actions/chatapp"
import {Link} from "react-router-dom";
import DatePicker from 'react-datetime';




const Styledimg = styled.img`
width: 40px;
border-radius: 50% !important;

`;
const Styledbutton = styled.button`
border-color: transparent;
background-color: #009efb;
color: #fff;
width: 50px;
border: 1px solid #009efb;
`;

function Take_appointment () {
    // get l'utilisateur connecté
    const currentUser = AuthService.getCurrentUser();
    // localisation de l'utilisateur    
    const location = useGeoLocation();  
    //redux
    const dispatch = useDispatch();
    //get messages
    const talks  = useSelector((state) => state.chatappReducer.talks);
    useEffect(() => {
        dispatch(GetTalks(currentUser.id));
    })  
     //search
     const [searchvalue, setSearch] = useState("")
     const handlesearchchange = (e)=>{
         e.preventDefault()
         setSearch( e.target.value)
         console.log("search"+searchvalue)
     }
     const filtredMessages = talks && talks.filter(
         (talk) =>
            talk.messageSent.toLowerCase().includes(searchvalue.toLowerCase()) ||
            talk.messageReceived.toLowerCase().includes(searchvalue.toLowerCase())
     );
 
    //afficher les messages
    const display = filtredMessages && filtredMessages.map((talk) => {
           return (
               <div>
                   <div className="chat chat-left">
                        <div className="chat-avatar">
                            <a href="profile.html" className="avatar">
                            <img alt="Jennifer Robinson" src="assets/img/image_skander.jpg" className="img-fluid rounded-circle" />
                            </a>
                        </div>
                        <div className="chat-body">
                            <div className="chat-bubble">
                                <div className="chat-content">
                                    <p>{talk.messageSent}</p>
                                    <span className="chat-time">{moment(talk.date).format('DD MMMM hh:mmA')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chat chat-right">
                        <div class="chat-body">
                            <div class="chat-bubble">
                                <div class="chat-content">
                                    <p>{talk.messageReceived}</p>
                                    <span class="chat-time">{moment(talk.date).format('DD MMMM hh:mmA')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
        )
    })
   
    
    
    // envoyer message
    const [UserMessage , setMessage] = useState({
        message : "",
        Userlat:"",
        Userlng:"",
        Username:"",
        Usermail:"",
        Date:""
    });
    const handledateChange =(date)=>{
        setMessage({
            ...UserMessage,
            Date: moment(date).toDate()
        });
      }
    const handleSend = (e) => {
        e.preventDefault();
        if(UserMessage.message != "")
        {
        console.log(UserMessage.message + " a a " + UserMessage.Date);
        dispatch(Send_Message(UserMessage , currentUser.id));
        setMessage({
            ...UserMessage,
            message:""
            
        });
        }
        
    }
   

    return (
    <div className="page-wrapper"> 
        

        <div className="chat-main-row">
            <div className="chat-main-wrapper">
                <div className="col-lg-9 message-view chat-view">
                    <div className="chat-window">
                        <div className="fixed-header">
                            <div className="navbar">
                                <div className="user-details mr-auto">
                                    <div className="float-left user-img m-r-10">
                                    <Styledimg src="assets/img/chatbot.jpg" alt="#"  />
                                    </div>
                                    <div className="user-info float-left">
                                        <a href="profile.html"><span className="font-bold">Nearest doctor</span> </a>
                                        <span className="last-seen">Always available</span>
                                    </div>
                                </div>
                                <div className="search-box">
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" placeholder="Search" onChange={(e) =>{handlesearchchange(e)}} />
                                        <span className="input-group-append">
                                        <button className="btn" type="button"><i className="fa fa-search" /></button>
                                        </span>
                                    </div>
                                </div>
                                <ul className="nav custom-menu">
                                    <li className="nav-item dropdown dropdown-action">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-cog" /></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="javascript:void(0)" onClick={(e) => {dispatch(Delete_Talks(currentUser.id))}} >Delete Conversations</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="chat-contents">
                            <div className="chat-content-wrap">
                                <div className="chat-wrap-inner">
                                    <div className="chat-box">
                                        <div className="chats">
                                            <div className="chat chat-right">
                                                <div className="chat-body">
                                                    <div className="chat-bubble">
                                                        <div className="chat-content">
                                                            <p>Hello we need your confirmation to get your location</p>
                                                            <button type="submit" className="btn btn-primary "  onClick={
                                                                () => {
                                                                    localStorage.setItem("latitude", JSON.stringify(location.coordinates.lat));
                                                                    localStorage.setItem("longitude", JSON.stringify(location.coordinates.lng));
                                                                    alert('your location is '+  JSON.stringify(location.coordinates));
                                                                }
                                                                        }>
                                                                Confirm
                                                            </button>
                                                            <span className="chat-time">8:30 am</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="chat-line">
                                                <span className="chat-date">October 8th, 2015</span>
                                            </div>
                                            {display}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chat-footer">
                            <div className="message-bar">
                                <div className="message-inner">
                                    <div className="message-area">
                                        <div className="input-group">
                                            <textarea className="form-control" placeholder="Type message..." value={UserMessage.message} onChange={(e) => {setMessage({ message : e.target.value, Userlat : localStorage.getItem("latitude"),Userlng : localStorage.getItem("longitude"),Username : currentUser.username,Usermail : currentUser.email })}} />
                                            <DatePicker 
                                            className="input-group-append"
                                            dateFormat="DD-MM-YYYY"
                                            timeFormat="hh:mm A"
                                            placeholderText="Date picker" 
                                            selected={UserMessage.Date}
                                            onChange={handledateChange}  
                                            />
                                            
                                            <span className="input-group-append">
                                                <Styledbutton  type="submit" onClick={handleSend}><i className="fa fa-paper-plane"></i></Styledbutton>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 message-view chat-profile-view chat-sidebar" id="chat_sidebar">
                <div className="chat-window video-window">
                    <div className="fixed-header">
                    <ul className="nav nav-tabs nav-tabs-bottom">
                        <li className="nav-item"><a className="nav-link active" href="#profile_tab" data-toggle="tab">Profile</a></li>
                    </ul>
                    </div>
                    <div className="tab-content chat-contents">               
                        <div className="content-full tab-pane show active" id="profile_tab">
                            <div className="display-table">
                                <div className="table-row">
                                    <div className="table-body">
                                        <div className="table-content">
                                            <div className="chat-profile-img">
                                                <div className="edit-profile-img">
                                                    <img src="assets/img/image_skander.jpg" alt />
                                                    <span className="change-img">Change Image</span>
                                                </div>
                                                <h3 className="user-name m-t-10 mb-0">{currentUser.username}</h3>
                                                <small className="text-muted">Account VIP</small>
                                                <a href="edit-profile.html" className="btn btn-primary edit-btn"><i className="fa fa-pencil" /></a>
                                            </div>
                                            <div className="chat-profile-info">
                                                <ul className="user-det-list">
                                                    <li>
                                                        <span>Username:</span>
                                                        <span className="float-right text-muted">{currentUser.username}</span>
                                                    </li>
                                                    <li>
                                                        <span>B_D:</span>
                                                        <span className="float-right text-muted">{moment(currentUser.birthdate).format('d-MMM-YYYY')}</span>
                                                    </li>
                                                    <li>
                                                    <span>Email:</span>
                                                    <span className="float-right text-muted">{currentUser.email}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>

    );
}
export default Take_appointment;