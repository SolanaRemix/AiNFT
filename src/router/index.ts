import { createRouter, createWebHistory } from 'vue-router'

import AdminAI from '@/pages/admin/AdminAI.vue'
import AdminDashboard from '@/pages/admin/AdminDashboard.vue'
import AdminData from '@/pages/admin/AdminData.vue'
import AdminMarketing from '@/pages/admin/AdminMarketing.vue'
import AdminSolana from '@/pages/admin/AdminSolana.vue'
import AgentsPage from '@/pages/AgentsPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import ExplorePage from '@/pages/ExplorePage.vue'
import FeedPage from '@/pages/FeedPage.vue'
import HomePage from '@/pages/HomePage.vue'
import SponsorsCampaignNewPage from '@/pages/sponsors/SponsorsCampaignNewPage.vue'
import SponsorsPage from '@/pages/SponsorsPage.vue'
import AIStudioPage from '@/pages/studio/AIStudioPage.vue'
import CollectionEditPage from '@/pages/studio/CollectionEditPage.vue'
import CollectionsPage from '@/pages/studio/CollectionsPage.vue'
import DAOPage from '@/pages/studio/DAOPage.vue'
import DAOProposalsPage from '@/pages/studio/DAOProposalsPage.vue'
import GrowthPage from '@/pages/studio/GrowthPage.vue'
import InvestPage from '@/pages/studio/InvestPage.vue'
import NFTEditPage from '@/pages/studio/NFTEditPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/explore', name: 'explore', component: ExplorePage },
    { path: '/feed', name: 'feed', component: FeedPage },
    { path: '/dashboard', name: 'dashboard', component: DashboardPage },
    { path: '/studio/ai', name: 'studio-ai', component: AIStudioPage },
    { path: '/studio/collections', name: 'studio-collections', component: CollectionsPage },
    { path: '/studio/collections/:id/edit', name: 'studio-collection-edit', component: CollectionEditPage },
    { path: '/studio/nfts/:id/edit', name: 'studio-nft-edit', component: NFTEditPage },
    { path: '/studio/:handle/dao', name: 'studio-dao', component: DAOPage },
    { path: '/studio/:handle/dao/proposals', name: 'studio-dao-proposals', component: DAOProposalsPage },
    { path: '/studio/:handle/invest', name: 'studio-invest', component: InvestPage },
    { path: '/studio/:handle/growth', name: 'studio-growth', component: GrowthPage },
    { path: '/sponsors', name: 'sponsors', component: SponsorsPage },
    { path: '/sponsors/campaigns/new', name: 'sponsors-campaign-new', component: SponsorsCampaignNewPage },
    { path: '/agents', name: 'agents', component: AgentsPage },
    { path: '/admin', name: 'admin-dashboard', component: AdminDashboard },
    { path: '/admin/data', name: 'admin-data', component: AdminData },
    { path: '/admin/ai', name: 'admin-ai', component: AdminAI },
    { path: '/admin/solana', name: 'admin-solana', component: AdminSolana },
    { path: '/admin/marketing', name: 'admin-marketing', component: AdminMarketing },
  ],
})

export default router
