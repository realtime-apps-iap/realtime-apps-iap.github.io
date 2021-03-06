import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Icon from "@material-ui/core/Icon";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import styles from "./styles.module.css";

const projects = [
  {
    imageUrl: "img/groupchatapp.jpg",
    title: "Group Chat Application 💬",
    description:
      "A simple group chat room to demonstrate usage of the WebSockets protocol, the browser WebSockets API and the node.js WebSockets library, which enables the user to send and receive messages in real-time.",
    ghlink: "https://github.com/realtime-apps-iap/chat-app",
    weblink: "https://rtwa-iap-chat-app.herokuapp.com/",
  },
  {
    imageUrl: "img/locationsharingapp.jpg",
    title: "Location Sharing Application 📍",
    description:
      "A location-sharing application that allows users to create and join rooms where they can share their live locations. Built with WebSockets and leaflet.js",
    ghlink: "https://github.com/realtime-apps-iap/location-sharing-app",
    weblink: "https://rtwa-iap-location-sharing-app.herokuapp.com/",
  },
  {
    imageUrl: "img/videocallapp-pic.jpg",
    title: "Group Video Call Application 📸",
    description:
      "An video call application that allows users to join the same video call room, and share their webcam video feed and microphone audio feed. Built with WebRTC and WebSockets",
    ghlink: "https://github.com/realtime-apps-iap/video-call-app",
    weblink: "https://rtwa-iap-video-call-app.herokuapp.com/",
  },
  {
    imageUrl: "img/realtimeboardapp.jpg",
    title: "Interactive Realtime Board ✏️",
    description:
      "Virtual collaboraive sketching canvas for your design ideas! Getting started on a new project and ideating with your teams virtually? This interactive realtime interactive board will help with your team's design thinking process, providing you a platform for collaborative sketching and discussions..",
    ghlink: "https://github.com/xmkoh/interactive-realtime-board",
    weblink: "https://realtime-interactive-board.herokuapp.com/",
    participantSubmission: true,
  },
  {
    imageUrl: "img/seventeenapp.jpg",
    title: "Seventeen 1️⃣7️⃣",
    description:
      "Want to get know someone better, but don't have the patience to talk to them? Seventeen is a website where you use drawings to understand your friend better and learn how they perceive the world, without speaking a single world. All in 17 seconds.",
    ghlink: "https://github.com/caydennn/iap-submission",
    weblink: "https://realtime-2p-canvas.herokuapp.com/",
    participantSubmission: true,
  },
];

function Project({
  imageUrl,
  title,
  description,
  ghlink,
  weblink,
  participantSubmission = false,
}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div class={clsx("card item shadow--md", styles.projectCard)}>
      {imgUrl && (
        <div class="card__image">
          {participantSubmission && (
            <span
              className={clsx(
                "badge badge--warning item shadow--lw",
                styles.projectCardBadge
              )}
            >
              <Icon style={{ fontSize: "0.75rem" }}>starborder</Icon>Participant
              Submission
            </span>
          )}

          <img src={imgUrl} alt={title} />
        </div>
      )}
      <div class="card__body">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div class="card__footer">
        {weblink && (
          <a
            href={weblink}
            target="_blank"
            class="button button--primary button--block margin-bottom--xs"
          >
            Check it out! <Icon>language</Icon>
          </a>
        )}
        {ghlink && (
          <a
            href={ghlink}
            target="_blank"
            class="button button--primary button--block margin-bottom--xs"
          >
            Source Code <GitHubIcon />
          </a>
        )}
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description="Introduction to Realtime Web Applications is a workshop aimed at introducing to participants the principles behind building highly interactive, real-time web applications.">
      <header
        className={clsx("hero hero--primary text--center", styles.heroBanner)}
      >
        <div className={clsx("container", styles.heroContainer)}>
          <h1 className={clsx("hero__title", styles.title)}>
            {siteConfig.title}
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div class="margin-bottom--sm">
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Start Learning!
            </Link>
          </div>
          <div class="margin-bottom--sm">
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to="https://eventyay.com/e/fa96ae2c/session/6886"
            >
              Join us at FOSSASIA 2021!
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div class="container">
          <section>
            <div class="row padding-vert--md">
              <div class="col col--10 col--offset-1">
                <h1 class="margin-bottom--sm">About</h1>
                <p>
                  Introduction to Realtime Web Applications is a workshop aimed
                  at introducing to participants the principles behind building
                  highly interactive and real-time web applications which has
                  wide applicability.
                  <br />
                  <br />
                  Participants will pick up the basics of how to build realtime
                  web applications through utilising WebSockets and WebRTC
                  technologies to build applications such as text and video chat
                  rooms, as well as get inspired to build similar applications
                  themselves.
                  <br />
                  <br />
                  In addition, we also go through the basics of utilizing Docker
                  and deploying the applications on Heroku, as well as other
                  considerations on scalability and reliability.
                  <br />
                  <br />
                  This workshop was initially run as an Independent Activities
                  Period (IAP) workshop at the Singapore University of
                  Technology and Design. To encourage participants to produce cool realtime
                  applications, we organised a hackathon towards the end of the
                  workshop, and we saw many interesting projects! The winning
                  submissions are included in the project list below. Feel free
                  to try them out!
                  <br />
                  <br />
                  We're looking forward to hosting a second run of the workshop at{" "}
                  <a
                    href="https://eventyay.com/e/fa96ae2c/session/6886"
                    target="_blank"
                  >
                    FOSSASIA Summit 2021
                  </a>
                  !
                </p>
              </div>
            </div>
          </section>

          <section>
            <div class="row padding-vert--md">
              <div class="col col--10 col--offset-1">
                <h1 class="margin-bottom--sm">Projects</h1>
                <p>Here are some of the projects built from this course!</p>
                <div class="row">
                  <div class={styles.projectsContainer}>
                    {projects.map((props, idx) => (
                      <Project key={idx} {...props} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div class="row padding-vert--md">
              <div class="col col--10 col--offset-1">
                <h1 class="margin-bottom--sm">Team</h1>
                <p>This workshop was brought to you by:</p>
                <div class="row">
                  <div class="col margin-bottom--md">
                    <div class="card item shadow--md">
                      <div class="card__body">
                        <div class="avatar avatar--vertical">
                          <img
                            class="avatar__photo avatar__photo--xl"
                            src={useBaseUrl("img/lowen_photo.jpg")}
                          />
                          <div class="avatar__intro">
                            <h4 class="avatar__name">Lowen (Low En)</h4>
                            <small class="avatar__subtitle margin-bottom--md">
                              Software Engineer | Passionate about Web
                              Technologies
                            </small>
                            <div class="row">
                              <div class="col">
                                <a
                                  href="https://github.com/lowenhere"
                                  target="_blank"
                                  class="margin-right-md"
                                >
                                  <GitHubIcon />
                                </a>
                                <a> </a>
                                <a
                                  href="https://linkedin.com/in/low-en"
                                  target="_blank"
                                >
                                  <LinkedInIcon />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col margin-bottom--md">
                    <div class="card item shadow--md">
                      <div class="card__body">
                        <div class="avatar avatar--vertical">
                          <img
                            class="avatar__photo avatar__photo--xl"
                            src={useBaseUrl("img/daryll_photo.jpg")}
                          />
                          <div class="avatar__intro">
                            <h4 class="avatar__name">Daryll Wong</h4>
                            <small class="avatar__subtitle margin-bottom--md">
                              Software Engineer | Product Enthusiast
                            </small>
                            <div class="row">
                              <div class="col">
                                <a
                                  href="https://github.com/daryllman"
                                  target="_blank"
                                  class="margin-right-md"
                                >
                                  <GitHubIcon />
                                </a>
                                <a> </a>
                                <a
                                  href="https://linkedin.com/in/daryllwong/"
                                  target="_blank"
                                >
                                  <LinkedInIcon />
                                </a>
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
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
