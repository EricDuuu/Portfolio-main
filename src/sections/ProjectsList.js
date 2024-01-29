import screenshot1 from "../images/Fish.gif";
import screenshot2 from "../images/Task.gif";


export const projects = [
    {
        title: "Fish Classification",
        link: "https://github.com/EricDuuu/Fish_Classification_CNN",
        image: screenshot1,
        description: "Created a CNN model for fish classification with 100 accuracy and 6 million parameters. Achieved comparable accuracy only 25% of ResNet-50 parameters and 42.8% of VGG-16 parameters.",
        bulleted: [
            "Developed a website to upload fish images to classify and report accuracy of each class of fish.",
            "Experimented with transfer learning, hyper parameter tuning, early stopping, and image normalization.",
            "Earned 2nd place in project and research rankings for class of 36 groups."],
        technologies: "TensorFlow, Flask, Python"
    },
    {
        title: "Task Tracker",
        link: "https://github.com/EricDuuu/Task-Tracker",
        image: screenshot2,
        description: "Created CLI (Command Line Interface) based generic task tracker with comprehensive metrics for each task and fully fleshed out error handling.",
        bulleted: [
            "Used optimal hierarchal system design by implementing design patterns such as: Strategiy, Command, and Factory.",
            "Created a suite of test cases for input in both entrypoints (CLI and log-file) and generic error handlers.",
            "Implemented log-file parser and automatic cleansing of malformed lines for user convinience."],
        technologies: "Java"
    },
]