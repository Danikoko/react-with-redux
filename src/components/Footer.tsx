import { DEVELOPER } from "../utils/constants";

const {
    name,
    linkedInProfile,
    twitterHandle,
    githubProfile,
    projectRepo
} = DEVELOPER

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="ui vertical footer segment form-page">
            <div className="ui container">
                ReduxShop {year} [<a href={projectRepo} target='_blank'>Github Repo</a>] <br />By {name}: <a href={linkedInProfile} target='_blank'>LinkedIn</a> | <a href={twitterHandle} target='_blank'>Twitter</a> | <a href={githubProfile} target='_blank'>Github</a> 
            </div>
        </div>
    );
}
 
export default Footer;