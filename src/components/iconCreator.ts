const TECH_MAP: Map<string, string> = new Map([
    ['Amazon Web Service', 'devicon-amazonwebservices-plain'],
    ['Apache', 'devicon-apache-plain'],
    ['AWS', 'devicon-amazonwebservices-plain'],
    ['Bootstrap', 'devicon-bootstrap-plain'],
    ['C#', 'devicon-csharp-plain'],
    ['C', 'devicon-c-plain'],
    ['C++', 'devicon-cplusplus-plain'],
    ['CSS 3', 'devicon-css3-plain'],
    ['CSS', 'devicon-css3-plain'],
    ['CSS3', 'devicon-css3-plain'],
    ['Docker', 'devicon-docker-plain'],
    ['GCP', 'devicon-google-plain'],
    ['Google Cloud', 'devicon-google-plain'],
    ['Google', 'devicon-google-plain'],
    ['HTML 5', 'devicon-html5-plain'],
    ['HTML', 'devicon-html5-plain'],
    ['HTML5', 'devicon-html5-plain'],
    ['Java', 'devicon-java-plain'],
    ['JavaScript', 'devicon-javascript-plain'],
    ['My Sql', 'devicon-mysql-plain'],
    ['MySql', 'devicon-mysql-plain'],
    ['MySQL', 'devicon-mysql-plain'],
    ['PHP', 'devicon-php-plain'],
    ['Python', 'devicon-python-plain'],
    ['React', 'devicon-react-plain'],
    ['Sass', 'devicon-sass-original'],
    ['Sql', 'devicon-mysql-plain'],
    ['SQL', 'devicon-mysql-plain'],
    ['TypeScript', 'devicon-typescript-plain']
]);

export function createIcon(tech: string) {
    return TECH_MAP.get(tech);
}
