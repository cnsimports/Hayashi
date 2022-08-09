import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

export const Content = ({ content }) => {
	return (
		<div className="container -sm -text-md -pt-m">
			<ReactMarkdown>{content}</ReactMarkdown>
		</div>
	);
};

Content.propTypes = {
	content: PropTypes.string,
};
