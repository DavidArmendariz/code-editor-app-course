import { ReactComponent as CSSIcon } from 'assets/images/css3.svg';
import { ReactComponent as GoIcon } from 'assets/images/go.svg';
import { ReactComponent as HtmlIcon } from 'assets/images/html5.svg';
import { ReactComponent as JavaIcon } from 'assets/images/java.svg';
import { ReactComponent as JavascriptIcon } from 'assets/images/javascript.svg';
import { ReactComponent as PHPIcon } from 'assets/images/php.svg';
import { ReactComponent as PythonIcon } from 'assets/images/python.svg';
import { ReactComponent as RubyIcon } from 'assets/images/ruby.svg';
import { ReactComponent as TypescriptIcon } from 'assets/images/typescript.svg';
import { ReactComponent as ReactIcon } from 'assets/images/react.svg';

const ProgrammingLanguagesList = () => {
  const style = {
    padding: '10px',
    height: '50px',
    width: '50px',
  };

  return (
    <div>
      <CSSIcon style={style} />
      <GoIcon style={style} />
      <HtmlIcon style={style} />
      <JavaIcon style={style} />
      <JavascriptIcon style={style} />
      <PHPIcon style={style} />
      <PythonIcon style={style} />
      <RubyIcon style={style} />
      <TypescriptIcon style={style} />
      <ReactIcon style={style} />
    </div>
  );
};

export default ProgrammingLanguagesList;
