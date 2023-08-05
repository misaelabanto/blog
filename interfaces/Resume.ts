import { Basics } from './ResumeBasics';
import { Education } from './ResumeEducation';
import { Interests } from './ResumeInterests';
import { Languages } from './ResumeLanguages';
import { Metadata } from './ResumeMetadata';
import { Projects } from './ResumeProjects';
import { References } from './ResumeReferences';
import { Skills } from './ResumeSkills';
import { Volunteer } from './ResumeVolunteer';
import { Work } from './ResumeWorks';

export interface Sections {
	work: Work;
	skills: Skills;
	projects: Projects;
	education: Education;
	interests: Interests;
	languages: Languages;
	volunteer: Volunteer;
	references: References;
}

export interface Resume {
	basics: Basics;
	sections: Sections;
	metadata: Metadata;
}
