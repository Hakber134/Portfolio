import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import spaceImage from "../../images/space.jpg";
import { Link, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import {MouseOutlined} from "@mui/icons-material"

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
            <Typography variant="h5">About Me</Typography>
          </div>
          <div className="aboutImage">
            <img
              src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg"
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
              src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg"
              alt="Face1"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img
              src="https://i0.wp.com/www.sidekickinteractive.com/wp-content/uploads/2023/04/placeholder-3.png?resize=300%2C200&ssl=1"
              alt="Face2"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img
              src="https://www.clipartmax.com/png/middle/92-925246_window-cleaning-placeholder-icon-png.png"
              alt="Face3"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img
              src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg"
              alt="Face4"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img
              src="https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-gallery-icon-png-image_515223.jpg"
              alt="Face5"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img
              src="https://icons-for-free.com/iconfiles/png/512/mountains+photo+photos+placeholder+sun+icon-1320165661388177228.png"
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
            image="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
            title="RC Car"
            url="https://github.com/Hakber134/RC-Car"
          />
          <ProjectsCard
            image="https://i.gyazo.com/979962f9b89163167a85402f7ad7457a.png"
            title="Connect4 Board Game"
            url="https://github.com/Hakber134/Connect4"
          />
          <ProjectsCard
            image="https://i.imgur.com/K6ECxYA.png"
            title="Diet Tracker"
            url="https://github.com/Hakber134/Diet-Tracker"
          />
          <ProjectsCard
            image="https://i.gyazo.com/d5e16a44cc838a0377cff3d57fc4c8c5.png"
            title="Rock Paper Scissors Game"
            url="https://github.com/Hakber134/Rock-Paper-Scissors"
          />
          <ProjectsCard
            image="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
            title="Vendor Billing System"
            url="https://github.com/Hakber134/Billing-Management-System"
          />
          <ProjectsCard
            image="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
            title="Portfolio Website"
            url="https://github.com/Hakber134/Portfolio-Website"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;