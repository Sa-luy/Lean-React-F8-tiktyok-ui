import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import images from '~/assets/images';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AcountItem from '../AcountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setsearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setsearchResult([]);
        }, 2000);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-tittle')}>Acount</h4>
                                <AcountItem />
                                <AcountItem />
                                <AcountItem />
                                <AcountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    {/* <Button upload>
                        {' '}
                        <span className={cx('icon-upload')}>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                        Upload
                    </Button> */}
                    <Button rightIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                    <Button primary>Log in</Button>
                    <Button rounded>Donwloan App</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
