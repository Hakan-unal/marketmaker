import { Row, Typography, Col, Image, Switch } from "antd";
import {
   title1,
   title2,
   title3,
   paragraph1,
   paragraph2,
   paragraph3,
   paragraph4,
   paragraph5,
   paragraph6,
} from "./language/language";
import { useState } from "react";

const { Title, Paragraph } = Typography;

const App = () => {
   const [translate, setTranslate] = useState<boolean>(false);

   return (
      <Row justify={"center"}>
         <Switch
            unCheckedChildren={<div>UK</div>}
            checkedChildren={<div>EN</div>}
            onChange={(checked) => setTranslate(checked)}
         />

         <Col span={24}>
            <Title level={1}>{title1(translate)}</Title>

            <Paragraph>{paragraph1(translate)}</Paragraph>
         </Col>
         <Col sm={4}>
            <Image
               width={"100%"}
               src="https://as1.ftcdn.net/v2/jpg/03/43/21/92/1000_F_343219263_kBIXF8URy0yD4K5voCm2fAxA3ri8xrbY.jpg"
            />
         </Col>
         <Col span={24}>
            <Title level={2}>{title2(translate)}</Title>
            <Paragraph>{paragraph2(translate)}</Paragraph>
         </Col>

         <Col sm={4}>
            <Image
               width={"100%"}
               src="https://img.freepik.com/premium-vector/vector-blackboard-with-tasks-sorting-scheme-kanban-board-template-blank-stickers-work_566075-71.jpg"
            />
         </Col>

         <Col span={24}>
            <Title level={3}>{title3(translate)}</Title>
            <Paragraph>
               <ul>
                  <li>{paragraph3(translate)}</li>
                  <li>{paragraph4(translate)}</li>
                  <li>{paragraph5(translate)}</li>
                  <li>{paragraph6(translate)}</li>
               </ul>
            </Paragraph>
         </Col>
      </Row>
   );
};

export default App;
