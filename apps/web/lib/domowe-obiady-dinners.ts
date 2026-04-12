import { cache } from 'react';

export type DomoweObiadyDinner = {
	day: string;
	date: string;
	description?: string;
	soup?: string;
	set1?: string;
	set2?: string;
};

export type DomoweObiadyMenu = {
	weekStart: string;
	weekEnd: string;
	dinners: DomoweObiadyDinner[];
};

function isNonEmptyString(value: unknown): value is string {
	return typeof value === 'string' && value.trim().length > 0;
}

function validateDinner(raw: unknown): DomoweObiadyDinner {
	if (typeof raw !== 'object' || raw == null) {
		throw new Error('Domowe obiady: invalid dinner entry (expected object).');
	}

	const record = raw as Record<string, unknown>;
	const { day, date, description, soup, set1, set2 } = record;

	if (!isNonEmptyString(day)) {
		throw new Error('Domowe obiady: invalid dinner entry "day".');
	}
	if (!isNonEmptyString(date)) {
		throw new Error('Domowe obiady: invalid dinner entry "date".');
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
			'Domowe obiady: dinner must have at least one of description/soup/set1/set2.',
		);
	}

	return {
		day,
		date,
		...(description != null ? { description } : {}),
		...(soup != null ? { soup } : {}),
		...(set1 != null ? { set1 } : {}),
		...(set2 != null ? { set2 } : {}),
	};
}

async function loadDomoweObiadyMenu(): Promise<DomoweObiadyMenu> {
	const data = await import('@/data/domowe-obiady-dinners.json');
	const raw = data.default as Record<string, unknown>;

	if (!isNonEmptyString(raw.weekStart) || !isNonEmptyString(raw.weekEnd)) {
		throw new Error('Domowe obiady: missing weekStart or weekEnd in JSON.');
	}

	const dinners = raw.dinners;
	if (!Array.isArray(dinners)) {
		throw new Error('Domowe obiady: dinners must be an array.');
	}

	return {
		weekStart: raw.weekStart,
		weekEnd: raw.weekEnd,
		dinners: dinners.map(validateDinner),
	};
}

export const getDomoweObiadyMenu = cache(loadDomoweObiadyMenu);
