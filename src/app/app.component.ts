import { Component, HostListener, OnInit } from '@angular/core';
import axios from 'axios';

export const SKILLS = [
  {
    name: 'AdonisJS',
    path: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
    experience: 'Architected and implemented modular, IoC-driven back-end APIs with AdonisJS to power scalable video analysis pipelines and conversational AI services. Designed and optimized job pipelines using class-based workers, integrated MinIO for object storage, and orchestrated secure internal networking between services.'
  },
  {
    name: 'Vue.js',
    path: 'https://cdn3d.iconscout.com/3d/free/thumb/free-vuejs-3d-logo-download-in-png-blend-fbx-gltf-file-formats--vue-company-brand-vol-1-pack-logos-3640297.png?f=webp',
    experience: 'Built interactive, real-time UIs in Vue.js—including video upload interfaces, a custom detection timeline UI with filterable/sortable tables, and conversational AI frontend components. Developed UI adapters to reuse existing components and accelerate feature delivery.'
  },
  {
    name: 'PostgreSQL',
    path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
    experience: 'Managed and optimized PostgreSQL databases over secure internal IP networking; leveraged pgvector and cube extensions for high-dimensional data handling. Tuned indices and queries for large-scale video analytics and leaderboard systems.'
  },
  {
    name: 'Socket.IO',
    path: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg',
    experience: 'Implemented real-time, bidirectional WebSocket communication with Socket.IO to stream live video detection data and system alerts directly to client dashboards. Integrated Socket.IO into both video analysis timelines and AI chat applications for seamless updates.'
  },
  {
    name: 'RabbitMQ',
    path: 'https://cdn.iconscout.com/icon/free/png-256/free-rabbitmq-icon-download-in-svg-png-gif-file-formats--logo-brand-world-logos-vol-1-pack-icons-282296.png?f=webp',
    experience: 'Integrated RabbitMQ to orchestrate distributed, event-driven worker pipelines—ensuring reliable message delivery, high-throughput task processing, and coordination between video analysis, embedding workflows, and notification systems.'
  },
  {
    name: 'Docker',
    path: 'https://static-00.iconduck.com/assets.00/docker-icon-2048x2048-5mc7mvtn.png',
    experience: 'Containerized microservices and job workers with Docker, managing multiple development environments simultaneously. Deployed services using Docker Compose and Kubernetes for scalable orchestration and reliable CI/CD pipelines.'
  },
  {
    name: 'Node.js',
    path: 'assets/images/nodejs-icon.png',
    experience: 'Developed custom object-tracking algorithms in Node.js, integrating FFmpeg for video processing and filesystem operations. Automated workflows with cron jobs for scheduled analysis and built backend services for AI chat, embedding retries, and share-song features.'
  },
  {
    name: 'Redis',
    path: 'https://static-00.iconduck.com/assets.00/redis-original-wordmark-icon-2045x2048-nz2tg5u6.png',
    experience: 'Configured and managed Redis clusters for fast, scalable leaderboard reads with sub-millisecond performance, implementing ZSET bucketing strategies and caching layers to support high-volume ranking queries.'
  }
];



export const UIScreenShotPathsandDesc = [
	{
	  path: 'assets/images/1.png',
	  desc: 'This is the Error and Statistics Tracking page I developed, featuring a comprehensive overview of recent errors and graphical trends for easy analysis.'
	},
	{
	  path: 'assets/images/2.png',
	  desc: 'Error Modal displaying detailed error messages, providing users with clear information and guidance on resolving issues.'
	},
	{
	  path: 'assets/images/3.png',
	  desc: 'A more detailed Error Modal with in-depth information.'
	},
	{
	  path: 'assets/images/4.png',
	  desc: 'Side Panel View showcasing the output of a specific component, allowing users to inspect and interact with component results seamlessly.'
	},
	{
	  path: 'assets/images/5.png',
	  desc: 'Extended Display of a component\'s output, featuring a fully functional modal with search and pagination capabilities.'
	},
	{
	  path: 'assets/images/6.png',
	  desc: 'Overview of all file operation components developed for our no-code automation platform, streamlining file management tasks such as compression and base64 conversion.'
	},
	{
	  path: 'assets/images/7.png',
	  desc: 'Extended Table Display for table-type outputs, complete with search, sort, and pagination features for enhanced data handling.'
	},
	{
	  path: 'assets/images/8.png',
	  desc: 'Details Page of the app feature, where users can set and update application details such as name, description, and visual elements.'
	},
	{
	  path: 'assets/images/9.png',
	  desc: 'App Design Page showcasing all app components I developed, enabling users to design their app interface through a drag-and-drop system and dynamic adjustments.'
	},
	{
	  path: 'assets/images/10.png',
	  desc: 'Error Display Modal for the app feature, providing users with clear and detailed error messages within the app development environment.'
	},
	{
	  path: 'assets/images/11.png',
	  desc: 'Flows Page for the app feature, where users can create, manage, and review automation flows, linking dynamic values to component inputs for real-time updates.'
	},
	{
	  path: "assets/images/12.png",
	  desc: 'Informative Modal displaying the current state of the app, offering users valuable insights and status updates.'
	},
	{
		path: "assets/images/13.jpeg",
		desc: 'A fully functional chat page I developed, featuring real-time updates and WebSocket connections for seamless communication.'
	},
	{
		path: "assets/images/14.jpeg",
		desc: 'Like and Dislike feature for the chat page, allowing users to express their opinions and interact with the chat content.'
	}
  ]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isDragging = false;
  startAngle = 0;
  currentRotation = 0;
  currentSkill: any = {};
  skills = SKILLS;
  index = 0;
  uiScreenShotPathsandDesc = UIScreenShotPathsandDesc;
  name = '';
  email = '';
  message = '';
	background: any;
	isMobile: boolean = false;

	@HostListener('window:resize', ['$event'])
	onResize() {
		console.log('resize');
	  this.checkScreenSize();
	}

	checkScreenSize() {
	  this.isMobile = window.innerWidth <= 768;
	}

  ngOnInit(): void {

	document.addEventListener('DOMContentLoaded', function () {
		const menuToggle = document.getElementById('menu-toggle');
		const mobileMenu = document.getElementById('mobile-menu');

		menuToggle!.addEventListener('click', function () {
			console.log('clicked');
		  if (mobileMenu!.style.display === 'block') {
			mobileMenu!.style.display = 'none';
		  } else {
			mobileMenu!.style.display = 'block';
		  }
		});
	  });
	this.checkScreenSize();
    this.startInitialRotation();

	// Rotate the UI screenshots every 3 seconds
	setInterval(() => {
		this.index = (this.index + 1) % this.uiScreenShotPathsandDesc.length;
	}, 4000);
  }

  startInitialRotation(): void {
    const gear = document.querySelector('.gear') as HTMLElement;
    const interval = setInterval(() => {

      this.updateCurrentSkill();
    }, 20);

    setTimeout(() => {
      clearInterval(interval);
    }, 2800); // Assuming the initial animation lasts 2 seconds
  }

  setSkill(skill: any): void {
    this.currentSkill = skill;
  }
  download() {
	var a = document.createElement("a"); // Create <a>
	a.href = "assets/resume.pdf"; // Path to your resume file
	a.download = "Zehra_Demirhan_CV.pdf"; // The name of the file to be downloaded
	document.body.appendChild(a); // Append the <a> to the document body (necessary for some browsers)
	a.click(); // Trigger the download
	document.body.removeChild(a); // Remove the <a> from the document body
  }


  @HostListener('window:mouseup')
  stopDragging(): void {
    this.isDragging = false;
    document.body.style.cursor = 'grab';
  }

  @HostListener('window:mousemove', ['$event'])
  rotateGear(event: MouseEvent): void {
    if (this.isDragging) {
      const currentAngle = this.getAngle(event.clientX, event.clientY);
      const rotation = currentAngle - this.startAngle;
      this.currentRotation += rotation;
      this.startAngle = currentAngle;
      this.updateCurrentSkill();
    }
  }

 async sendEmail() {
	await axios.post('https://app.monkedo.com/webhook/mrifhvrkjzyb51y7', {
		name: this.name,
		email: this.email,
		message: this.message
	});
	this.name = '';
	this.email = '';
	this.message = '';
 	}


  startDragging(event: MouseEvent): void {
    this.isDragging = true;
    this.startAngle = this.getAngle(event.clientX, event.clientY);
    document.body.style.cursor = 'grabbing';
  }

  private getAngle(x: number, y: number): number {
    const gear = document.querySelector('.gear-container') as HTMLElement;
    const rect = gear.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  }

  private updateCurrentSkill(): void {
    // Get the html element with the collison-detect class
    const collisionSquare = document.querySelector('.collison-detect') as HTMLElement;

    //Get the bounding rectangle of the element
    const rect = collisionSquare.getBoundingClientRect();

    // Now for each icon, check if it is inside the bounding rectangle of the collisionSquare
    const icons = Array.from(document.querySelectorAll('.icon')) as HTMLElement[];
    icons.forEach(icon => {
      const iconRect = icon.getBoundingClientRect();
      if (this.isColliding(rect, iconRect)) {
        const skillName = icon.getAttribute('data-skill-name');
        this.currentSkill = SKILLS.find(skill => skill.name === skillName) || null;
      }
    });
  }

  private isColliding(rect1: DOMRect, rect2: DOMRect): boolean {
    return !(
      rect1.right <= rect2.left ||
      rect1.left >= rect2.right ||
      rect1.bottom <= rect2.top ||
      rect1.top >= rect2.bottom
    );
  }
}
