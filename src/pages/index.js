import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Icon from "@material-ui/core/Icon";
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from "./styles.module.css";


const projects = [
  {
    imageUrl: "img/groupchatapp.jpg",
    title: "Group Chat Application 💬",
    description: "A simple group chat room to demonstrate usage of the WebSockets protocol, the browser WebSockets API and the node.js WebSockets library, which enables the user to send and receive messages in real-time.",
    ghlink: "https://github.com/realtime-apps-iap/chat-app",
    weblink: "https://rtwa-iap-chat-app.herokuapp.com/"
  },
  {
    imageUrl: "img/locationsharingapp.jpg",
    title: "Location Sharing Application 📍",
    description: "A location-sharing application that allows users to create and join rooms where they can share their live locations. Built with WebSockets and leaflet.js",
    ghlink: "https://github.com/realtime-apps-iap/location-sharing-app",
    weblink: "https://rtwa-iap-location-sharing-app.herokuapp.com/"
  },
  {
    imageUrl: "img/realtimeboardapp.jpg",
    title: "Interactive Realtime Board ✏️",
    description: "Virtual collaboraive sketching canvas for your design ideas! Getting started on a new project and ideating with your teams virtually? This interactive realtime interactive board will help with your team's design thinking process, providing you a platform for collaborative sketching and discussions..",
    ghlink: "https://github.com/xmkoh/interactive-realtime-board",
    weblink: "https://realtime-interactive-board.herokuapp.com/",
    participantSubmission: true,
  },
  {
    imageUrl: "img/seventeenapp.jpg",
    title: "Seventeen 1️⃣7️⃣",
    description: "Want to get know someone better, but don't have the patience to talk to them? Seventeen is a website where you use drawings to understand your friend better and learn how they perceive the world, without speaking a single world. All in 17 seconds.",
    ghlink: "https://github.com/caydennn/iap-submission",
    weblink: "https://realtime-2p-canvas.herokuapp.com/",
    participantSubmission: true,
  },
]

function Project({ imageUrl, title, description, ghlink, weblink, participantSubmission = false }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div class={clsx("card item shadow--md", styles.projectCard)}>
      {imgUrl && (
        <div class="card__image">
          {participantSubmission && (
            <span className={clsx("badge badge--warning item shadow--lw", styles.projectCardBadge)}>
              <Icon style={{ fontSize: "0.75rem" }}>starborder</Icon>Participant Submission
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
          <a href={weblink} target="_blank"
            class="button button--primary button--block margin-bottom--xs">
            Check it out! <Icon>language</Icon>
          </a>
        )}
        {ghlink && (
          <a href={ghlink} target="_blank"
            class="button button--primary button--block margin-bottom--xs">
            Source Code <GitHubIcon />
          </a>
        )}
      </div>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Workshop Resources`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary text--center", styles.heroBanner)}>

        <div className={clsx("container", styles.heroContainer)}>
          <h1 className={clsx("hero__title", styles.title)}>
            {siteConfig.title}
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
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
        </div>
      </header>
      <main>
        <div class="container">
          <section>
            <div class="row padding-vert--md">
              <div class="col col--10 col--offset-1">
                <h1 class="margin-bottom--sm">
                  Projects
              </h1>
                <p>
                  Here are some of the projects built from this course!
              </p>
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
        </div>
      </main>
    </Layout >
  );
}

export default Home;
