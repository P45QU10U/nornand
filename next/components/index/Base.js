import { FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import Bubble from '../designSystem/Bubble'
import { Section } from '../designSystem/layout'

export default function Base() {
  return (
    <Section>
      <div className="bg-orange-200 bg-opacity-60 border-t-4 border-orange-300 rounded-sm p-8">
        <div className="flex gap-3 mb-4">
          <Bubble bgColor="bg-orange-500" textColor="text-white">
            <FaHtml5 size="32" title="HTML5" />
          </Bubble>
          <Bubble bgColor="bg-blue-500" textColor="text-white">
            <FaCss3 size="32" title="CSS3" />
          </Bubble>
          <Bubble bgColor="bg-yellow-300" textColor="text-black">
            <SiJavascript size="28" title="JavaScript" />
          </Bubble>
        </div>
        <h4>Front</h4>
        <p className="">
          <strong>HTML</strong>, <strong>CSS</strong> font partie du socle indispensable. À mes débuts, je regardais{' '}
          <strong>JavaScript</strong> de loin, aujourd'hui, c'est le langage que j'utilise le plus souvent.
        </p>
      </div>
    </Section>
  )
}
