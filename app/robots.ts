export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
export default function robots(): MetadataRoute.Robots {
return process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true' ? {rules:[{userAgent:'*',disallow:'/'}]} : {rules:[{userAgent:'*',allow:'/'}],sitemap:`${site.url}/sitemap.xml`};
}
