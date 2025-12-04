import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const toggle = () => {
        // eslint-disable-next-line no-use-before-define
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    const { t, i18n } = useTranslation();

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(short ? 'short-lang' : 'language')}
        </Button>
    );
};
