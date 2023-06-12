import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  NavLink,
  Extra,
  LogoContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <h2>E assim é contada a nossa história de Amor, te amo muito...</h2>
            </NavLink>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
