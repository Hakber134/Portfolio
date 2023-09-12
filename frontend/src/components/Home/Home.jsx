import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import spaceImage from "../../images/space.jpg";
import {Typography } from "@mui/material";
import {Link} from "react-router-dom"
import { Icon } from "@iconify/react";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import {MouseOutlined} from "@mui/icons-material";
import aboutImage from "../../images/about.jpeg"


const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);

    const pointLight = new THREE.PointLight(0xffffff, 50); //why 100?
    const pointLight2 = new THREE.PointLight(0xffffff, 1); //why 100?
    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(pointLight);
    scene.add(venus);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
      if (e.clientX > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
    });

    venus.position.set(8, 5, 5);

    camera.position.set(4, 4, 8);
    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y = +0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();


    return window.addEventListener("scroll", (e)=> {
      camera.rotation.z=window.scrollY*0.001;
      camera.rotation.y=window.scrollY*0.003;
    })
  }, []);
  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
      

        <div className="homeCanvasBox">
          <Typography variant="h2">WELCOME</Typography>
          <Typography variant="h2">TO</Typography>
          <Typography variant="h2">HASSANS'</Typography>
          <Typography variant="h2">PORTFOLIO</Typography>
        </div>

        <Link to="/contact">GET IN TOUCH</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        {/*<Typography variant="h3">TIMELINE</Typography>
            <TimeLine timelines={[1,2,3,4]} />*/}
        <Typography variant="h3">ABOUT ME</Typography>
        <div className="aboutContainer">
          <div className="aboutText">
            <Typography variant="h6">
            My name is Hassan and I'm a third year electrical engineering student at the University of Alberta. 
            From a young age, I discovered a passion for technology which directed me to studying electrical engineering in university. 
            This website was created as a platform for me to store and display my passion projects as I create them, as well as to give a bit more insight into my skills. 
            I've developed this full-stack website to enhance my programming skills by utilizing the MERN (MongoDB, ExpressJS, ReactJS, and NodeJS) tech stack, and I implemented
            the 3D animations you see at the top using ThreeJS.
            I plan to keep this site updated as I continue to learn and grow. Outside of my academic and professional commitments, 
            I enjoy spending time at the gym, travelling, hiking, following the Edmonton Oilers, or unwinding with NFL Football Sundays.
            Feel free to explore my work and interests. If you have any questions or would like to connect, you can find my contact information in the footer below.
            </Typography>
          </div>
          <div className="aboutImage">
            <img
              src={aboutImage}
              alt="Hassan"
            />
          </div>
        </div>
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div class="skillsContainer">
          <div class="box box1">
            <Typography>Programming</Typography>
            <div className="progIcons">
              <div className="rowone">
                <div className="C">
                  <Icon icon="logos:c" width={50} height={50} />
                  <Typography variant="h6">C</Typography>
                </div>
                <div className="Cpp">
                  <Icon icon="devicon:cplusplus" width={50} height={50} />
                  <Typography variant="h6">C++</Typography>
                </div>
                <div className="python">
                  <Icon icon="logos:python" height={50} />
                  <Typography variant="h6">Python</Typography>
                </div>
                </div>
                <div className="rowtwo">
                <div className="html">
                  <Icon icon="logos:html-5" width={50} height={50} />
                  <Typography variant="h6">HTML</Typography>
                </div>
                <div className="css">
                  <Icon icon="logos:css-3" width={50} height={50} />
                  <Typography variant="h6">CSS</Typography>
                </div>
                <div className="JS">
                  <Icon icon="skill-icons:javascript" width={50} height={50} />
                  <Typography variant="h6">JavaScript</Typography>
                </div>
                </div>
                <div className="rowthree">
                <div className="React">
                  <Icon icon="logos:react" width={50} height={50} />
                  <Typography variant="h6">React</Typography>
                </div>
                <div className="arm">
                  <Icon icon="logos:arm" width={50} height={50} />
                  <Typography variant="h6">ARM Assembly</Typography>
                </div>
                <div className="matlab">
                  <Icon icon="devicon:matlab" width={50} height={50} />
                  <Typography variant="h6">MATLAB</Typography>
                </div>
              </div>
            </div>
          </div>
          <div class="box box2">
            <Typography>Hardware</Typography>
            <div className="hardIcons">
              <div className="boxtworowone">
                <div className="Arduino">
                  <Icon icon="logos:arduino" width={50} height={50} />
                  <Typography variant="h6">Arduino</Typography>
                </div>
                <div className="STM32">
                  <Icon
                    icon="simple-icons:stmicroelectronics"
                    color="royalblue"
                    width={50}
                    height={50}
                  />
                  <Typography variant="h6">STM32</Typography>
                </div>
                </div>
                <div className="boxtworowtwo">
                <div className="Raspberrypi">
                  <Icon icon="devicon:raspberrypi" width={50} height={50} />
                  <Typography variant="h6">Raspberry Pi</Typography>
                </div>

                <div className="fpga">
                  <Icon
                    icon="mdi:integrated-circuit-chip"
                    color="green"
                    width={50}
                    height={50}
                  />
                  <Typography variant="h6">FPGA's</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img
              src="https://previews.dropbox.com/p/thumb/ACAK9Wg2RndgtSsXty4v-xedS-svaQNlPp6xzDi1CuuQHbD5HVfcJTP2s3ftfnTWgGODiUJB1B_wxnnkKaT2w23lff4SgA-wp8MdXrgAqNJOI98lY5TOqsaw_hw9N0hS-f_qmoPQ2XFnr95mM6XuI4cVTa_G5ysao3IeeY587PhQi4F-ylW4UyhVMHkwjWf5yRAi1ASTNvhIGN05TyXDT5k4jT7KJhU-z5Dj5t6f3c4jAet66la-kzmv6ijfPwQfvZCy0k-RKnCvVnFPLzzrInJhLD7xRqOWPn086CAHjFjMIjZwHp7I7MZoJUNHRTSUIu8zdkXuqzwUOC0BQyJ0CFYr/p.png"
              alt="Face1"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img
              src="https://previews.dropbox.com/p/thumb/ACCNc2M3d3kIo1uFXrkYfg9DStbUADYG8hvkCUAim934xGPe3EZG57x2pdKqft1ezHmWilURb0cwQNqjbfiAtvCWO-2I0uNHW1_l9sWooeVHynH8G4QyCDtCmVtfdcS5pHSq-MVgwZau1OPoBiFDusLS4gkISgvuZwzzhKL5VmP0QHh_fOy4_Vz66uroBZc-LqGbyifZIlZvqXkp8XHuKqGBx1NJHNfqM666C_9peTu-ULZ7NGPZVHeUjHh_CIq4Oy0yIykYjkdagG89T5XpLaHztApngI_7iIfuIGSstQPjuSYaW7SM91wrQEWlCypjglv14JRG_cvWOX3f3VhPT6LD/p.png"
              alt="Face2"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img
              src="https://previews.dropbox.com/p/thumb/ACDASqoNUq9xII_a0WUW9x9LRCg0JKOwB3ALus6cwD4DTDkd0_dZxGIbR-moyyT-vgnC8RU8hG47xl_D9oMzIkB-hgHjxYL81xVqkXaoFgcTw-SUq9pvvEiEsMAqGmDD_5aMstpGxeNf0dKsAI7-Dcbd8x0Z-zMGteqLXPvNdPh2cJcybgycgX40sOSPlDaR4wDdUCLMOXDBAtqkFo3WUkH42BKKw333weHo8kDCguTx8VhT26Wtwu8M_9x_TN0xdWNQZ5PwirX-12GhQPBPX5JPJqauhPHOzNXnz_Dxy9-Er99NwiROPsdIEGlJuIXK-InGszEaSfP90TuRtWtvSqFb/p.png"
              alt="Face3"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img
              src="https://previews.dropbox.com/p/thumb/ACChxpCVJvWQ6x-qXfegIB3Hw24JMnusdCKQhgietXvruewUgPM2tL-ZNOUQo_hkMc_CyS1nAoBJDQtfoFRbog3iM515Yc6c1GXFiM8odrHTCm063gbvruCps_-yUa3Ajo4miQWlwDVt8IpMQrISND6McjKG5iK4L8hT0OzfrUVPXGksWbbMP4XpUPJDaLO6My1d065bHfp_i_3ikF9xN3Dhayh-WMvxXWIuc8bX0JCUIBpd2k8QqUFE6DA30E3UnOXM0ErVHBracZxpUINv-ayT5fm0JXnCB_TRoTvb20aN6NxeyW0oDxCZf8qNzANbuI345nVnGgTtThskiz5h3pSN/p.png"
              alt="Face4"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img
              src="https://previews.dropbox.com/p/thumb/ACBsbw0ay5aiiNEW3-JwKnxi7xzxBFW9QUbQoGrG5dZC--4CwpsLv9tHOPMNhnCd_VBe1mSHQvpEoCYf3T-Snu24iCbGaViCcfni61bKMojfQHZogfF7B9Y-myUwZu4Za0Uz2d6MryfHMcjReM5NWBdvGSjqPg31HyxEqjHXMhGe03ePEHcpIc6Fc72A88NBtDkKLnb2UiySKvmSeQXCKcj_IpweBiRzJYhBvR9zD3cQP7j2mMAOFcMsUTVxtEe4pcvDRKaswDfd1qPSRVuXs7yjjL6tc1GtZQud2R715diNUiIx5MQWrMccUy1Gm09IlsmDSfW9PKmk1DITE27BGem_/p.png"
              alt="Face5"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img
              src="https://previews.dropbox.com/p/thumb/ACBSiM0sHs_k2G8dfSQNpdElb1_DYLlPhOrDx_O0bua0P0SZtqsvdb4brNg3QMSOKhJx5sNuEVxdb_n8S7rCLgSfNbAeI6p8uYuqfzz00kAW7WxDGRC2dOwwr1X6QSb2uT_bMGCK2ZKbcRe4s0Bym4TbBUSOjCkMtjE02MhKdAvsb4N9_UJPTFe6glN-oH_y4ttOwbwLYlQM3FIh-cZwFLiesBuczW25yIsKk_zSEHDYyQxIbA9L5ukw6UTeGnYvlDl4gLrvnBTfkg9GHlvc41-4uaVk1BxznllRWjeJ1vDCblGJThhEs41zj2ktEuhbBUHFlSQrBcAK5kOErt1kKkCB/p.png"
              alt="Face6"
            />
          </div>
        </div>
        <div className="cubeShadow"></div>
      </div>

      <div className="homeProjects">
        <Typography variant="h3">PROJECTS</Typography>
        <Typography variant="h6">
          Click to take a look at the GitHub repos for some of the projects I've
          been building in my free time!
        </Typography>

        <div className="homeProjectsWrapper">
          <ProjectsCard
            image="https://previews.dropbox.com/p/thumb/ACDqMCB0q8sBGsWjk9_wcmKF5oOG00QFID4RLVWeQnX77BAa82rATohPnk_afyZsjva_alAGVtkisXyLrQGb2tb9ClyWc4-i19c05LXPhOzJoORdn81e6FXLs3Dmp_uCU98oHC4z0cQM4Cy9dPnkg3QUAsEEUfjb7KrMeK7E0NHaalRrsoReMykxuRDp91hTCG5rukFg03hFWIT_ElYO58bZ1xTyuYgA7pS_U0k7BeN6L7jxl0ZS_i2Ta1l3YrckDtmGsLRSyelUDOIr_gL6wbQa-D_AfN96Q-B2TvJv9VlW_2_WdAuFA8g2CJxZTGCSmZ_fLLDEb_YvyNlB6A3tpcME/p.jpeg"
            title="RC Car"
            url="https://github.com/Hakber134/RC-Car"
          />
          <ProjectsCard
            image="https://previews.dropbox.com/p/thumb/ACCk4lFVfWZHZOm3LhfX3PTZeOsCH7uRUaaf0_8kk7zn9YvRzdpkHA9GXuIw4Ccwbvy2APkBLY7WCN8lNDv4JcOO3fd3vO18WkrS6zhsYuuYivpLUFowd9GNqyPAMM9MZO26mvKn0Eb4UBVO-3w82jxEPVQiqC0pnF481IiOT9WBmufmweCuzWcmPE2mZ3WMKeFKN3mLsp1n2gSZtj-3PZgINWmLpCaAGReKw_R_fdFDsqql0MohZMAMbtPO4YNH_guaG_DwYsu1s1h8E4nbJ23_29fgqkap7gO1Y0LbSADULuvoCSu7dJ5ohYjk1KMxYCJipn5324akbtipjQ2ocDAv/p.png"
            title="Connect4 Board Game"
            url="https://github.com/Hakber134/Connect4"
          />
          <ProjectsCard
            image="https://previews.dropbox.com/p/thumb/ACC9W2uGNdEG2YHZCMdLcoS2MjYekF07XyHzW9XeWuqgQKI2IxKn1eQTIp7IA2FBRk91ESsZjfj5885H6UBllqkyR_j2WW361aNaFwJCQzqfQ2RSj1nfOAwq-PdNu-xg1zbGZ3HWopt4nMoJLYZN_D1yQJZwWA9WPqTTikmF1-okkdtrNsWLe0I2CKO4L-hVhqNCDHXZZCBYkgToX_J3cQZMKCi1OS30AurK19OXQcLCj3YGoWZtB0VsTS8xWhngV4D1sfAHw9ikryMGCzBVP8_h_Z9zNZVJm8sxk8AHLlwP6Z8U8vq5LgrXupphyS9bHiwioDtBPV2KNYAOzD97wjUd/p.png"
            title="Diet Tracker"
            url="https://github.com/Hakber134/Diet-Tracker"
          />
          <ProjectsCard
            image="https://previews.dropbox.com/p/thumb/ACBx0WKU5kaTUVU9C9XW5RNzTx4KnltBNES09_kQbcSzcn-zeSeTywyUUM9kWNciW8VFdzRqHc2Y9EFdnUHcYtEnQ8pHYIXH8yGSvYthwqAlvmY4QbhQnmOf4g-WZu-_N_yQ4P72c4yHscAvMstOIzgbsP8F0beRA5b8wMcTZAuIppFSP8qDtbuQOxNnglqSgTY75rRaqrWfDXq-47DtqJ1u4VGxzrDDNKcIvivJ_RVHcZzjR4UE1no4S3ZB-9WtISZn-82L9juyp-RMtrhWSvjqYFTFiajXkH826Srn8uyjDL5BdLhwrhaYKdYbDBta5YeGkacJCizKa4NSSGc7GJ2f/p.png"
            title="Rock Paper Scissors Game"
            url="https://github.com/Hakber134/Rock-Paper-Scissors"
          />
          <ProjectsCard
            image="https://previews.dropbox.com/p/thumb/ACAfgEOtjAm-RxwTs30TZlm2pWyGe6OPyulbE7oncSOuT7lrZF2ocKY3I9Mdea74CXw8pEEeGUnE5CF--3QwY87R1KfhJj7qWPvW30AQNlsPwvMNgMsINgYZzEQKynZJDRb1qYBbRGLN_uHLwtt3rz1cZkGxphWr68ligppyzvMN6vpBalsnJEAXGuAIm11cYB5dKK1t_naplbkOUjv3A1KiQ1bmG8cyDeiwKl9CqQZ-P9qJqZHfL0XcaAhrQVdnRDAw2IOWqW3CTHGiOWJRN-dFbhod9mFcQ3hB0CfFqFR1cvqG5qqLSXBLdHn9pYWErM-r_KXQsM0x1uGfvA1mhJPT/p.png"
            title="Bank Account Simulator"
            url="https://github.com/Hakber134/Bank-Account-Simulator"
          />
          <ProjectsCard
            image="https://previews.dropbox.com/p/thumb/ACB8SECpXobUcRuzzOnuP57iEEVZ26WS9KYhPrhncTBPtXGHk8vxlAbkBJm4djgw5-pLYl0KXCj4ntNcvNqxN1Eb0rVICuUQ0JBGrdRStNu9b-yybTSSX1gF1qyx3gdMyyxTL5vkvr3MQRcfk-UKisEDKnND2HT1RD17IC4IZzAOxHC5cCGA2JWp8yk4KQEwfmtD9pD1gWgJqvgC53xgdjb1JLYM_1Z9cnCop1MsakK4MpUjHWziUQqJwSB1kgPBxShVrHEWyru6Lf4EtvLPNkSV9ksp_zqUcxmDewWL7BDmTLNg77JDRaF_lyLsy7msKDzuStA9nShdbQy61TZjf-cK/p.jpeg"
            title="This Portfolio Website"
            url="https://github.com/Hakber134/Portfolio-Website"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;