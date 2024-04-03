import React from "react";
import { connect } from "react-redux";
import { toggleOpenContact } from "../../redux/contact/contact.actions";
import { Row, Col } from "antd";
import { homeContent2 } from "../../constant/contents";
import BorderText from "../../components/border-text/border-text.component";
import GraButton from "../../components/button/grabutton.component";
import "./m.what-we-do.styles.scss";

const MobileWhatWeDo = ({ id, toggleOpenContact }) => {
  return (
    <Row
      id={id}
      className="mobile-what-we-do"
      justify="space-between"
      align="bottom"
    >
      {homeContent2.map((content, index) => {
        const yellows = [1, 3];
        let colClass = "";
        let colRow = "";

        return (
          <Col key={index} span={24} className={`${colClass} ${colRow}`}>
            <BorderText
              content={content}
              yellow={yellows.includes(index)}
              direction={"top"}
            />
          </Col>
        );
      })}
      <div className="book-meeting">
        <GraButton handleClick={toggleOpenContact} inverse={true}>
          Book A Meeting
        </GraButton>
      </div>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleOpenContact: () => dispatch(toggleOpenContact()),
});

export default connect(null, mapDispatchToProps)(MobileWhatWeDo);
