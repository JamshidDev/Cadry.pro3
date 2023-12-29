import {h, defineComponent} from "vue";
import {NIcon} from "naive-ui";
import {
    ChartPerson24Regular, ChevronDown20Filled, PersonLock20Regular,
    PeopleCommunity20Filled,
    BriefcaseMedical20Regular,
    History24Filled,
    ClipboardBulletListRtl20Regular,
    PeopleCommunityAdd20Filled,
    PeopleList20Filled,
    PeopleTeamToolbox24Filled,
    GlobeShield20Filled,
    GlobeSearch24Regular,
    ArchiveMultiple16Regular,
    DocumentBulletListClock20Regular,
    TextBulletListRtl20Filled,
    ChartMultiple20Regular,
    DocumentTableCube20Regular,
} from '@vicons/fluent'

const renderIcon = (icon) => {
    return () => {
        return h(NIcon, null, {
            default: () => h(icon)
        });
    };
};

export const fluentIcon = {
    menu: [
        {
            key: 0,
            name: ChartPerson24Regular,
            icon: renderIcon(ChevronDown20Filled)
        },
        {
            key: 1,
            name: ClipboardBulletListRtl20Regular,
            icon: renderIcon(ClipboardBulletListRtl20Regular)
        },
        {
            key: 2,
            name: ChevronDown20Filled,
            icon: renderIcon(ChartPerson24Regular)

        },
        {
            key: 3,
            name: PersonLock20Regular,
            icon: renderIcon(PersonLock20Regular)
        },
        {
            key: 4,
            name: PeopleCommunity20Filled,
            icon: renderIcon(PeopleCommunity20Filled)
        }, {
            key: 5,
            name: BriefcaseMedical20Regular,
            icon: renderIcon(BriefcaseMedical20Regular)
        }, {
            key: 6,
            name: History24Filled,
            icon: renderIcon(History24Filled)
        },


        {
            key: 7,
            name: PeopleList20Filled,
            icon: renderIcon(PeopleList20Filled)
        },
        {
            key: 8,
            name: PeopleCommunityAdd20Filled,
            icon: renderIcon(PeopleCommunityAdd20Filled)
        },
        {
            key: 9,
            name: PeopleTeamToolbox24Filled,
            icon: renderIcon(PeopleTeamToolbox24Filled)
        },
        {
            key: 10,
            name: GlobeShield20Filled,
            icon: renderIcon(GlobeShield20Filled)
        },
        {
            key: 11,
            name: GlobeSearch24Regular,
            icon: renderIcon(GlobeSearch24Regular)
        },
        {
            key: 12,
            name: ArchiveMultiple16Regular,
            icon: renderIcon(ArchiveMultiple16Regular)
        },
        {
            key: 13,
            name: DocumentBulletListClock20Regular,
            icon: renderIcon(DocumentBulletListClock20Regular)
        },
        {
            key: 14,
            name: ChartMultiple20Regular,
            icon: renderIcon(ChartMultiple20Regular)
        },
        {
            key: 15,
            name: TextBulletListRtl20Filled,
            icon: renderIcon(TextBulletListRtl20Filled)
        },
        {
            key: 16,
            name: DocumentTableCube20Regular,
            icon: renderIcon(DocumentTableCube20Regular)
        },

    ]
}