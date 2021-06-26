import { FunctionComponent, useState, memo } from 'react';
import { ReactTypical as Typical } from '@deadcoder0904/react-typical';
import Switch from 'react-switch';
import { SharedBasicInfo } from '.';

type Props = {
    sharedData?: SharedBasicInfo;
};

export const Header: FunctionComponent<Props> = (props) => {
    let titles: (string | number)[] = [];
    const { sharedData } = props;
    const [checked, setChecked] = useState(true);

    const onThemeSwitchChange = (checked: boolean) => {
        setChecked(checked);
        setTheme();
    };

    const setTheme = () => {
        const dataThemeAttribute = 'data-theme';
        const body = document.body;
        const darkTheme = body.getAttribute(dataThemeAttribute) === 'dark';
        const newTheme = darkTheme ? 'light' : 'dark';
        body.setAttribute(dataThemeAttribute, newTheme);
    };

    const name = sharedData ? sharedData.name ?? '' : '';
    if (sharedData) {
        const sharedTitle = sharedData.titles ?? [];
        const unflattenedTitles = sharedTitle.map((x) => [x.toUpperCase(), 1500]);
        titles = unflattenedTitles.flat();
    }

    const HeaderTitleTypeAnimation = memo(
        () => {
            return <Typical className='title-styles' steps={titles} loop={50} />;
        },
        (_props, _prevProp) => true
    );

    return (
        <header id='home' style={{ height: window.innerHeight - 140, display: 'block' }}>
            <div className='row aligner' style={{ height: '100%' }}>
                <div className='col-md-12'>
                    <div>
                        <span className='iconify header-icon' data-icon='la:laptop-code' data-inline='false' />
                        <br />
                        <h1 className='mb-0'>
                            <Typical steps={[name]} wrapper='p' />
                        </h1>
                        <div className='title-container'>
                            <HeaderTitleTypeAnimation />
                        </div>
                        <Switch
                            checked={checked}
                            onChange={onThemeSwitchChange}
                            offColor='#baaa80'
                            onColor='#353535'
                            className='react-switch mx-auto'
                            width={90}
                            height={40}
                            uncheckedIcon={
                                <span
                                    className='iconify'
                                    data-icon='twemoji:owl'
                                    data-inline='false'
                                    style={{
                                        display: 'block',
                                        height: '100%',
                                        fontSize: 25,
                                        textAlign: 'end',
                                        marginLeft: '20px',
                                        color: '#353239'
                                    }}
                                />
                            }
                            checkedIcon={
                                <span
                                    className='iconify'
                                    data-icon='noto-v1:sun-with-face'
                                    data-inline='false'
                                    style={{
                                        display: 'block',
                                        height: '100%',
                                        fontSize: 25,
                                        textAlign: 'end',
                                        marginLeft: '10px',
                                        color: '#353239'
                                    }}
                                />
                            }
                            id='icon-switch'
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};
