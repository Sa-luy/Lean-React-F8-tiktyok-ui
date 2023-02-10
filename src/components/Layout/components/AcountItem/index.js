import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
function AcountItem() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e6fbccfe920afeb2bdfabdfb472dda06~c5_100x100.jpeg?x-expires=1675926000&x-signature=C6%2Bia3UGVs0R%2BaRlum0KfrTRdlQ%3D"
                alt="abc"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyen van A
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCircleCheck}
                    />
                </h4>
                <span className={cx('user-name')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AcountItem;
