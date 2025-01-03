import HeaderCard from "./component/header/HeaderCard";
import BioCard from "./component/dataCard/BioCard.js";
import SwipeableCard from "./component/swipeableCard/SwipeableCard.js";
import Page from "./component/page/PageComponent";
import GridLayout from "./component/gridLayout/GridLayout.js";
import InfoCard from "./component/infoCard/InfoCard.js";
import ContentCard from "./component/contentCard/ContentCard.js";
import "./App.css";
import "./assets/colors/Colors.css";

const App = () => {
  return (
    <div className="App">
      <Page>
        <HeaderCard
          greetingMessage="Android developer. KMP fan."
          name="Artsiom."
          introduction="I’m a developer passionate about building efficient, engaging
          experiences with Android. A Kotlin fan and Kotlin Multiplatform
          advocate, I focus on seamless cross-platform solutions."
          gitHubUrl="https://github.com/LeFarmico"
          linkedinUrl="https://www.linkedin.com/in/artsiom-zharnikovich-46726b1b5/"
          email="mailto:flyingtomars.m@gmail.com"
          spotifyUrl="https://open.spotify.com/user/lefarmico?si=71851c13a43b432a"
          instagramUrl="https://www.instagram.com/lefarmico/"
        />
      </Page>
      <Page>
        <GridLayout>
          <BioCard
            title="I'm Artsiom, a Java and kotlin developer spcialized on Android and KMP."
            text="I’ve been an Android developer from 2021, starting my journey in
          game development in 2019. I enjoy exploring the broader development process,
          from crafting design systems to building cross-platform solutions using
          Kotlin Multiplatform. This diverse experience allows me to create
          intuitive, cohesive experiences that balance technical precision with
          seamless functionality."
          />
          <SwipeableCard titleLabel="More About Me">
            <InfoCard
              text={
                "Athlete in the junior national team of Belarus, specializing in high jump and 100-meter sprint disciplines."
              }
            />
            <InfoCard
              text={"2019 Men’s Physique Bodybuilding Champion of Belarus."}
            />
            <InfoCard
              text={
                "Security Engineer from 2018 to 2020 at a high-risk chemical plant, ensuring safety and mitigating hazards in a critical environment."
              }
            />
            <InfoCard
              text={
                "Passionate about exploring diverse music genres and deeply fascinated by the rich history behind them."
              }
            />
          </SwipeableCard>
          <ContentCard
            style={{ background: "var(--accent-three-color)" }}
            header="Job"
            description="Currently working as an Android/Kotlin Multiplatform developer at Amuse, a music distribution company."
            buttonLabel="Go to website"
            url="https://www.amuse.io/en/"
          />
          <ContentCard
            style={{ background: "var(--surface-color)" }}
            header="Televoice"
            description="Telegram Speech Recognition Bot! A Kotlin application leveraging Telegram’s Bot API to transcribe audio messages. It processes incoming audio for speech recognition and responds with the converted text, delivering a seamless messaging experience."
            buttonLabel="See project"
            url="https://github.com/LeFarmico/televoice"
          />
          <ContentCard
            style={{ background: "var(--surface-high-color)" }}
            header="Hearthstone stats calculator "
            description="An application designed to evaluate the efficiency of each Minion in Hearthstone Battlegrounds."
            buttonLabel="See project"
            url="https://github.com/LeFarmico/hs-bg-stats-calculator"
          />
          <ContentCard
            style={{ background: "var(--surface-highest-color)" }}
            header="Gymsupporter"
            description="A workout tracker designed to enhance your fitness journey. Schedule routines, receive timely notifications, and create custom exercises to seamlessly integrate into your personalized workout plans."
            buttonLabel="See project"
            url="https://github.com/LeFarmico/GymSupporter"
          />
          <ContentCard
            style={{
              background: "var(--accent-four-color)",
              gridArea: "2 / 4 / 4 / 4",
            }}
            header="Contact me"
            description="If you want to talk to me. Please contact me by email"
            buttonLabel="Send email"
            url="mailto:flyingtomars.m@gmail.com"
          />
        </GridLayout>
      </Page>
    </div>
  );
};

export default App;
