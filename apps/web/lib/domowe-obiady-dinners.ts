import { cache } from 'react';

export type DomoweObiadyDinner = {
	day: string;
	description?: string;
	soup?: string;
	set1?: string;
	set2?: string;
};

function isNonEmptyString(value: unknown): value is string {
	return typeof value === 'string' && value.trim().length > 0;
}

function validateDomoweObiadyDinner(raw: unknown): DomoweObiadyDinner {
	if (typeof raw !== 'object' || raw == null) {
		throw new Error('Domowe obiady: invalid dinner entry (expected object).');
	}

	const record = raw as Record<string, unknown>;
	const day = record.day;
	const description = record.description;
	const soup = record.soup;
	const set1 = record.set1;
	const set2 = record.set2;

	if (!isNonEmptyString(day)) {
		throw new Error('Domowe obiady: invalid dinner entry "day".');
	}

	if (description != null && !isNonEmptyString(description)) {
		throw new Error('Domowe obiady: invalid dinner entry "description".');
	}

	if (soup != null && !isNonEmptyString(soup)) {
		throw new Error('Domowe obiady: invalid dinner entry "soup".');
	}

	if (set1 != null && !isNonEmptyString(set1)) {
		throw new Error('Domowe obiady: invalid dinner entry "set1".');
	}
	if (set2 != null && !isNonEmptyString(set2)) {
		throw new Error('Domowe obiady: invalid dinner entry "set2".');
	}

	if (description == null && soup == null && set1 == null && set2 == null) {
		throw new Error(
			'Domowe obiady: invalid dinner entry (expected at least one of description/soup/set1/set2).',
		);
	}

	return {
		day,
		...(description != null ? { description } : {}),
		...(soup != null ? { soup } : {}),
		...(set1 != null ? { set1 } : {}),
		...(set2 != null ? { set2 } : {}),
	};
}

async function loadDomoweObiadyDinners(): Promise<DomoweObiadyDinner[]> {
	const data = await import('@/data/domowe-obiady-dinners.json');
	const raw = data.default as unknown;

	if (!Array.isArray(raw)) {
		throw new Error('Domowe obiady: dinners JSON must be an array.');
	}

	return raw.map(validateDomoweObiadyDinner);
}

export const getDomoweObiadyDinners = cache(loadDomoweObiadyDinners);

