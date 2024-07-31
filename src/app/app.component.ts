import { Component, HostListener, OnInit } from '@angular/core';
import axios from 'axios';

export const SKILLS = [
  {
    name: 'Angular',
    path: 'assets/images/angular-icon.webp',
    experience: 'I have been using Angular for 1.5 years, during which I have developed numerous UIs utilizing a range of technologies. My expertise includes creating and using directives and pipes, with a strong understanding of component interactions such as input bindings, event emitting, and two-way bindings. I am well-versed in SCSS for styling, creating frontend services.  Additionally, I am proficient with third-party libraries, including ng-bootstrap, ApexCharts, and RXJS.'
  },
  {
    name: 'Nest.js',
    path: 'assets/images/nest-js-icon.png',
    experience: 'I have 1.5 years of experience with Nest.js, where I have coded numerous endpoints and created entire controller files from scratch. I have effectively used its built-in exception filters to handle unhandled exceptions and provide user-friendly responses. Additionally, I am familiar with creating custom route decorators and utilizing various param decorators to enhance HTTP route handling. My experience also includes implementing middleware functions to manage request and response objects efficiently within the application request-response cycle.'
  },
  {
    name: 'Node.js',
    path: 'assets/images/nodejs-icon.png',
    experience: 'I have extensive experience with Node.js, where I have developed a strong understanding of asynchronous logic and the event loop. I have coded numerous file components for our no-code automation platform using Node.js file operations, including tasks such as compressing files, creating files from base64, retrieving content as base64, and handling binary content. Additionally, I am proficient with Axios and the file and folder systems, and I have utilized various third-party libraries to enhance functionality and efficiency in my projects.'
  },
  {
    name: 'Bootstrap',
    path: 'assets/images/bootstrap-icon.png',
    experience: 'I have extensive experience using Bootstrap for developing responsive and visually appealing UIs. I have worked with Metronic and Keen themes to create professional and dynamic interfaces. Additionally, I have used SCSS extensively for styling,'
  },
  {
    name: 'React Native',
    path: 'assets/images/react-icon.png',
    experience: 'I have been working with React Native for 2 years, developing cross-platform mobile applications for both iOS and Android. At my company, I coded a full chat page utilizing its live update mechanism with RxJS, making me highly familiar with RxJS and WebSocket concepts, which I used extensively in the chat application.'
  },
  {
	name: 'MongoDB',
    path: 'assets/images/mongodb.svg',
    experience: 'I have been working with MongoDB for 1 year, using it to develop and manage databases for various applications. My experience includes designing schemas, creating indexes, and performing CRUD operations. Additionally, I am familiar with using Mongoose for schema validation and data modeling in Node.js applications.'
  },
  {
    name: 'Git',
    path: 'assets/images/git-icon.png',
    experience: 'I have been using Git for over 2 years. At my company, I managed branches for a complete mobile project, and I am comfortable resolving conflicts, doing rebases, interactive rebases, and performing merges. I follow best practices for commit messages and code reviews. Additionally, I am familiar with GitHub\'s pull request concept and review process.'
  },
  {
    name: 'TypeScript',
    path: 'assets/images/type-script-icon.png',
    experience: 'I have 2 years of experience with TypeScript, starting with React Native and then transitioning to Angular. I am highly comfortable with TypeScript\'s syntax and proficient in using it effectively.'
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

  ngOnInit(): void {
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
