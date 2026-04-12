'use client';

import { Tabs } from '@heroui/react/tabs';
import type { Key } from 'react';
import { useEffect, useState } from 'react';
import type { OfferSection } from '@/lib/offer';
import { getOfferSectionTabLabel } from '@/lib/offer';
import { OfferCategoryTabs } from './offer-category-tabs';
import { OfferSectionWrapper } from './offer-section';

function SectionTree({ section }: { section: OfferSection }) {
	return (
		<OfferSectionWrapper section={section}>
			<OfferCategoryTabs categories={section.categories} />
		</OfferSectionWrapper>
	);
}

/** Top-level offer sections use horizontal tabs when there are multiple sections. */
export function OfferSectionTabs({ sections }: { sections: OfferSection[] }) {
	const useTabs = sections.length > 1;
	const firstSlug = sections[0]?.slug ?? '';
	const [selectedKey, setSelectedKey] = useState<string>(firstSlug);

	useEffect(() => {
		if (!useTabs) {
			return;
		}
		const raw = window.location.hash.slice(1);
		if (raw && sections.some((s) => s.slug === raw)) {
			setSelectedKey(raw);
		}
	}, [sections, useTabs]);

	const handleSelectionChange = (key: Key | null) => {
		if (key == null) {
			return;
		}
		const next = String(key);
		setSelectedKey(next);
		window.history.replaceState(null, '', `#${next}`);
	};

	if (!sections.length) {
		return null;
	}

	if (!useTabs) {
		const [only] = sections;
		if (!only) {
			return null;
		}
		return (
			<div className="pt-8">
				<SectionTree section={only} />
			</div>
		);
	}

	return (
		<div className="pt-8">
			<Tabs.Root
				selectedKey={selectedKey}
				onSelectionChange={handleSelectionChange}
				orientation="horizontal"
				variant="primary"
			>
				<Tabs.ListContainer className="max-w-full overflow-x-auto overflow-y-hidden pb-1 [scrollbar-width:thin]">
					<Tabs.List aria-label="Sekcje oferty">
						{sections.map((section) => (
							<Tabs.Tab key={section.slug} id={section.slug}>
								<span className="whitespace-nowrap">
									{getOfferSectionTabLabel(section)}
								</span>
								<Tabs.Indicator />
							</Tabs.Tab>
						))}
					</Tabs.List>
				</Tabs.ListContainer>

				{sections.map((section) => (
					<Tabs.Panel key={section.slug} id={section.slug}>
						<SectionTree section={section} />
					</Tabs.Panel>
				))}
			</Tabs.Root>
		</div>
	);
}
