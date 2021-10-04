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
import { ReactComponent as DefaultIcon } from 'assets/images/blank-file.svg';

interface Props {
  extension?: string;
}

const ExtensionIcon = (props: Props) => {
  const style = {
    height: '15px',
    width: '15px',
  };

  switch (props.extension) {
    case 'jsx':
    case 'tsx':
      return <ReactIcon style={style} />;
    case 'js':
      return <JavascriptIcon style={style} />;
    case 'ts':
      return <TypescriptIcon style={style} />;
    case 'css':
      return <CSSIcon style={style} />;
    case 'php':
      return <PHPIcon style={style} />;
    case 'java':
      return <JavaIcon style={style} />;
    case 'html':
      return <HtmlIcon style={style} />;
    case 'rb':
      return <RubyIcon style={style} />;
    case 'go':
      return <GoIcon style={style} />;
    case 'py':
      return <PythonIcon style={style} />;
    default:
      return <DefaultIcon style={style} />;
  }
};

export default ExtensionIcon;
