import { useTranslation } from 'react-i18next';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();
    const date = new Date();

    return (
        <div className="flex flex-col gap-[20px] md:flex-row md:justify-between pl-10 md:pl-24 md:pr-24 pt-[45px] pr-10 pb-[60px] bg-slate-800 text-gray-100">
            <div>
                <div className="flex flex-col font-semibold">
                    <span>Nicolas</span>
                    <span>de Moura</span>
                </div>
                <span className="font-extralight text-[13px]">
                    © {date.getFullYear()}, {t('Built and designed by')} Nicolas de Moura
                </span>
            </div>

            <div>
                <h4 className="font-medium text-[18px]">Links</h4>
                <div className="grid grid-cols-2 grid-rows-2 font-semibold gap-x-[10px] gap-y-[5px] text-sky-400">
                    <Link to="/About" className="text-sky-400 transition ease-linear delay-100 hover:text-stone-100 hover:scale-110 relative z-30">{t('About')}</Link>
                    <a href="/#Skills" className="text-sky-400 transition ease-linear delay-100 hover:text-stone-100 hover:scale-110 relative z-30">{t('Skill')}s</a>
                    <a href="/#Projects" className="text-sky-400 transition ease-linear delay-100 hover:text-stone-100 hover:scale-110 relative z-30">{t('Projects')}</a>
                    <a href="/#Contact" className="text-sky-400 transition ease-linear delay-100 hover:text-stone-100 hover:scale-110 relative z-30">{t('Contact')}</a>
                </div>
            </div>

            <div>
                <span className="font-medium text-[18px]">{t('Get in touch')}</span>
                <div className="flex space-x-4 my-[20px]">
                    <a href="https://github.com/NicolasMouraC" target="_blank" rel="noreferrer" title="Github" className="text-sky-400 text-[30px] transition ease-linear delay-150 hover:text-stone-100 hover:scale-150 z-30 relative" >
                        <BsGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/nicolas-de-moura/" target="_blank" rel="noreferrer" title="Linkedin" className="text-sky-400 text-[30px] transition ease-linear delay-150 hover:text-stone-100 hover:scale-150 z-30 relative" >
                        <BsLinkedin/>
                    </a>
                    <a href="mailto:nicolasoutrog@gmail.com" target="_blank" rel="noreferrer" title="Email" className="text-sky-400 text-[30px] transition ease-linear delay-150 hover:text-stone-100 hover:scale-150 z-30 relative">
                        <MdEmail/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;