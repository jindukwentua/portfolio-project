import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons'


const Footer = () => (
    <footer className="bg-gray-100 py-16 text-gray-800">
        <div className="container">
            <div className="text-center">
                <div className="flex gap-4 mb-6 justify-center">
                    <a href="https://twitter.com/jxndu" target="_blank" rel="noreferrer" className="text-gray-800 text-xl hover:text-indigo-600">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://github.com/jindukwentua" target="_blank" rel="noreferrer" className="text-gray-800 text-xl hover:text-indigo-600">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/hilary-jindu-kwentua-52a426156/" target="_blank" rel="noreferrer" className="text-gray-800 text-xl hover:text-indigo-600">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://instagram.com/jxndu_" target="_blank" rel="noreferrer" className="text-gray-800 text-xl hover:text-indigo-600">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://jindukwentua.medium.com/" target="_blank" rel="noreferrer" className="text-gray-800 text-xl hover:text-indigo-600">
                        <FontAwesomeIcon icon={faMedium} />
                    </a>
                </div>
                <p className="mb-0">&copy; Jindu Kwentua { new Date().getFullYear() }</p>
            </div>
        </div>
    </footer>
)

export default Footer