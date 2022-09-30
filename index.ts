import get from "lodash.get";

export default function compile(template: string, data: object) {
	const re = /\{\s*([^\s*\}]+)?\s*\}/g;
	let match: RegExpExecArray;
	let result = template;

	while ((match = re.exec(template)!)) {
		result = result.replace(match[0], get(data, match[1]));
	}

	return result;
}
