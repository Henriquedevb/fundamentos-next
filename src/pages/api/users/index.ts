import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
	const users = [
		{ id: 1, name: "Henrique" },
		{ id: 2, name: "Helena" },
		{ id: 3, name: "Rael" },
	];

	return response.json(users);
};
