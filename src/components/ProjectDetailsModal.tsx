import { FunctionComponent } from 'react';
import { Modal } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../scss/light-slider.scss';
import AwesomeSliderStyles2 from '../scss/dark-slider.scss';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import { ProjectsEntity, createIcon } from '.';

type Props = {
    data?: ProjectsEntity;
    onHide: () => void;
    /* Figure out how to extend from modal props https://react-bootstrap.github.io/components/modal/#modals-props*/
    show?: boolean;
    animation?: boolean;
    autoFocus?: boolean;
};

export const ProjectDetailsModal: FunctionComponent<Props> = (props) => {
    const { data, onHide } = props;
    if (data === undefined) return <div />;
    const technologies = data.technologies ?? [];
    const images = data.images ?? [];
    const title = data.title;
    const description = data.description;
    const url = data.url;
    const tech = technologies?.map((icons, i) => {
        return (
            <li className='list-inline-item mx-3' key={i}>
                <span>
                    <div className='text-center'>
                        <i className={createIcon(icons.name)} style={{ fontSize: '300%' }}>
                            <p className='text-center' style={{ fontSize: '30%' }}>
                                {icons.name}
                            </p>
                        </i>
                    </div>
                </span>
            </li>
        );
    });
    const img = images.map((elem, i) => {
        return <div key={i} data-src={elem} />;
    });

    return (
        <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered className='modal-inside'>
            <span onClick={onHide} className='modal-close'>
                <i className='fas fa-times fa-3x close-icon' />
            </span>
            <div className='col-md-12'>
                {images.length > 0 && (
                    <div className='col-md-10 mx-auto' style={{ paddingBottom: '50px' }}>
                        <div className='slider-tab'>
                            <span
                                className='iconify slider-iconfiy'
                                data-icon='emojione:red-circle'
                                data-inline='false'
                                style={{ marginLeft: '5px' }}
                            />
                            &nbsp; <span className='iconify slider-iconfiy' data-icon='twemoji:yellow-circle' data-inline='false' /> &nbsp;{' '}
                            <span className='iconify slider-iconfiy' data-icon='twemoji:green-circle' data-inline='false' />
                        </div>
                        <AwesomeSlider
                            cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
                            animation='scaleOutAnimation'
                            className='slider-image'>
                            {img}
                        </AwesomeSlider>
                    </div>
                )}
                <div className='col-md-10 mx-auto'>
                    <h3 style={{ padding: '5px 5px 0 5px' }}>
                        {title}
                        {url ? (
                            <a href={url} target='_blank' rel='noopener noreferrer' className='link-href'>
                                <i className='fas fa-external-link-alt' style={{ marginLeft: '10px' }} />
                            </a>
                        ) : null}
                    </h3>
                    <p className='modal-description'>{description}</p>
                    <div className='col-md-12 text-center'>
                        <ul className='list-inline mx-auto'>{tech}</ul>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
