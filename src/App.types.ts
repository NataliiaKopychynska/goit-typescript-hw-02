export interface Photo {
  id: string;
  alt_description: string | null;
  asset_type: string;
  blur_hash: string;
  color: string;
  created_at: string;
  description: string | null;
  height: number;
  width: number;
  likes: number;
  liked_by_user: boolean;
  slug: string;
  promoted_at: string | null;
  sponsorship: null | object;
  updated_at: string;

  alternative_slugs: Record<string, string>;
  breadcrumbs: any[];
  current_user_collections: any[];
  topic_submissions: Record<string, any>;

  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };

  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };

  user: {
    id: string;
    username: string;
    name: string;
    first_name: string;
    last_name?: string;
    bio?: string;
    location?: string;
    total_photos: number;
    total_collections: number;
    total_likes: number;
  };
}
