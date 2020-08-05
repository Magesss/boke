import React, {FC} from 'react';
import './401.scss'

const Error401: FC = () => {
  return (
    <div className="errPage-container">
      <h3>Please click the bug icon in the upper right corner</h3>
      <aside>
        Now the management system are basically the form of the spa, it enhances the user experience, but it also
        increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately
        Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.
        <a target="_blank"
           className="link-type"
           rel="noopener noreferrer"
           href="https://panjiachen.github.io/vue-element-admin-site/guide/advanced/error.html">
          Document introduction
        </a>
      </aside>
      <div>
        <img alt="" src={require('./401_images/401.gif')} />
      </div>
    </div>
  )
};

export default Error401
