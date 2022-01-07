import React from "react";
import "./Faqs.css";

class Faqs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkmode: this.props.darkmode,
    };
  }

  render() {
    var darkmode = this.props.darkmode ? "dark" : "light";
    var darkmodeClass = "faqs-container " + darkmode;
    return (
      <div className={darkmodeClass}>
        <h3>What is this website?</h3>
        <p>
          This website does two things. I primarily made it to learn how to do
          web programming. I am also passionate about scripture memorisation. I
          haven't found any website that really does the 'recalling' method of
          scripture memorisation well. So I made this.
        </p>
        <h3>What is 'recalling' all about?</h3>
        <p>
          How do you memorise things? One way is too read it over and over. Then
          you repeat it over and over, alternating with reading until you get it
          right. However, did you know that your brain does a better job of
          remembering data when you recall it?{" "}
        </p>
        <p>But how do you recall something that you don't yet know?</p>
        <p>
          You give yourself signposts to guide you. In this method, those
          signpost are the first letter of each word. This gives you a hint,
          which is enough to trigger the flow of words and sentences.
        </p>
        <h3>Can you explain that again?</h3>
        <p>
          Think of the text like a path that you will journey on. You will use a
          map to guide you. You will need to alternate between studying the map
          and walking. Now imagine that there are signposts on the journey. You
          will need to read the map less, and you can take more journeys in the
          same time. Since your brain remembers best by recalling, the more
          journeys you can take, the better.
        </p>
        <h3>Why the NIV translation?</h3>
        <p>
          {" "}
          Scripture memorised will be bouncing around your head. It's really
          important that it flows in a natural way. But it's also fundamentally
          impoortant that it captures the meaning of scriptures. I think the NIV
          translation provides the best balance between literal and
          interpretive. If you would like to use an alternative translation, you
          are welcome to use my generate tool.
        </p>
        <h3>Can you provide the full text as well?</h3>
        <p>
          The full text can be found in an NIV book. It can also be found
          online.
        </p>
      </div>
    );
  }
}

export default Faqs;
