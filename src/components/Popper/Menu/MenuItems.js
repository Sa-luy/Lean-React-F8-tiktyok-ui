import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItems({ data }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.tittle}
        </Button>
    );
}

export default MenuItems;