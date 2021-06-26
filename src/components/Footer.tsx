import { FunctionComponent } from 'react';
import { SharedBasicInfo } from '.';

type Props = {
    sharedBasicInfo?: SharedBasicInfo;
};

export const Footer: FunctionComponent<Props> = (props) => {
    const { sharedBasicInfo } = props;
    const socials = sharedBasicInfo && 'social' in sharedBasicInfo ? sharedBasicInfo.social ?? [] : [];
    const networks = socials.map((network) => (
        <span key={network.name} className='m-4'>
            <a href={network.url} target='_blank' rel='noopener noreferrer'>
                <i className={network.class} />
            </a>
        </span>
    ));
    return (
        <footer>
            <div className='col-md-12'>
                <div className='social-links'>{networks}</div>
                <div className='copyright py-4 text-center'>
                    <div className='container'>
                        <small>Copyright &copy; {sharedBasicInfo ? sharedBasicInfo.name : '???'}</small>
                    </div>
                </div>
            </div>
        </footer>
    );
};
