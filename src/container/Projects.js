import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className='sub-container detail-container project-container'>
          <div>
            <div className='project-title'>SUPP</div>
              <div >
                <a 
                className='links'
                href="https://github.com/AlbertCarreras/supp-client"
                target="_blank"
                rel="noopener noreferrer"  
                >GITHUB Front-end</a> | 
                <a 
                className='links'
                href="https://github.com/AlbertCarreras/supp-server"
                target="_blank"
                rel="noopener noreferrer"
                >GITHUB Back-end</a> | 
                <a 
                className='links'
                href="https://albertcarreras.github.io/supp-client/home"
                target="_blank"
                rel="noopener noreferrer"
                >Site </a>
              </div>
            <div
            className='project-note'
            >Hosted in Heroku, wait a few seconds until the server wakes up! (user: tester & password: 12345678)</div>
            <div className='section'>A user-friendly app that sorts users by distance and filters them by common interests/hobbies. Users connect with each other via private chats.</div>
            <div className='video-container'>
              <iframe 
                title='SUPP' 
                width="560" 
                height="315" 
                src="https://www.youtube-nocookie.com/embed/yG3gEc1bC60" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div> 
            <div>
              <div className='subtitle'>Front-end</div>
                <ul>
                  <li>React with Redux & Redux Thunk</li>
                  <li>Geolocation Web API for obtaining user’s current location coordinates</li>
                  <li>Custom CSS, SASS, and Semantic UI elements for front-end design</li>
                  <li>Responsive and web first design</li>
                </ul>
                <div className='subtitle'>Back-end</div>
                <ul>
                  <li>Rails API with with serialization and Postgres
                  </li>
                  <li>Active Storage for photo storage connected to AWS S3 in production</li>
                  <li>Action Cable for live private chat feed updating and connected-user indicators</li>
                  <li>Knock for JSON Web Token authentication and cookies for websocket-connection authentication</li>
                  <li>Geokit for calculating surrounding users to connected user distance</li>
                </ul>
              </div>
          </div>

          <div>
            <div className='project-title'>Piano Friend</div>
              <div>
                <a               
                className='links'
                href="https://github.com/AlbertCarreras/piano-app"
                target="_blank"
                rel="noopener noreferrer"  
                >GITHUB Front-end</a> | 
                <a 
                className='links'
                href="https://github.com/AlbertCarreras/piano_api"
                target="_blank"
                rel="noopener noreferrer"
                >GITHUB Back-end</a> | 
                <a 
                className='links'
                href="https://albertcarreras.github.io/piano-app"
                target="_blank"
                rel="noopener noreferrer"
                >Site </a>
              </div>
            <div 
            className='project-note'
            >Hosted in Heroku, wait a few seconds until the server wakes up!</div>
            <div className='section'>A piano app to create, save, and share simple piano songs.</div>
            <iframe
              className='video'
              title='PIANO' 
              width="560" 
              height="315" 
              src="https://www.youtube-nocookie.com/embed/nU9_5UOYNgo" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>
            <div>
              <div className='subtitle'>Front-end</div>
                <ul>
                  <li>AudioContext Web API for sounds</li>
                </ul>
              <div className='subtitle'>Back-end</div>
                <ul>
                  <li>Rails API with serialization and Postgres</li>
                </ul>
            </div>
        </div>

        <div>
          <div className='project-title'>Board Games with Strangers</div>
          <div>
            <a 
            className='links'
            href="https://github.com/AlbertCarreras/piano-app"
            target="_blank"
            rel="noopener noreferrer"  
            >GITHUB</a> 
          </div>
          <div             
            className='section'
          >An app for people to organize and join board games events as well as to save a list of board games they own in their public profile.</div>
          <iframe 
            className='video'
            title='BOARDGAME' 
            width="560" 
            height="315" 
            src="https://www.youtube-nocookie.com/embed/N87whQBbK9I" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
          <div>
            <div className='subtitle'>Ruby on Rails with MVC</div>
              <ul>
                <li>Semantics UI for front-end design</li>
                <li>Cookies and Rails sessions for authentication</li>
              </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default About;
