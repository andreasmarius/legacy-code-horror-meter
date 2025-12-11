import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found in environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface HorrorSnippet {
  id: string;
  title: string;
  author?: string;
  horror_score: number;
  factors: string[];
  code_snippet?: string;
  created_at: string;
}

// API Functions for Horror Leaderboard
export const horrorLeaderboardApi = {
  // Fetch top N horror snippets
  async getTopSnippets(limit: number = 10): Promise<HorrorSnippet[]> {
    const { data, error } = await supabase
      .from('horror_snippets')
      .select('*')
      .order('horror_score', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching horror snippets:', error);
      return [];
    }

    return data || [];
  },

  // Submit a new horror snippet
  async submitSnippet(snippet: {
    title: string;
    author?: string;
    horror_score: number;
    factors: string[];
    code_snippet?: string;
  }): Promise<HorrorSnippet | null> {
    const { data, error } = await supabase
      .from('horror_snippets')
      .insert([snippet])
      .select()
      .single();

    if (error) {
      console.error('Error submitting snippet:', error);
      return null;
    }

    return data;
  },

  // Get a single snippet by ID
  async getSnippetById(id: string): Promise<HorrorSnippet | null> {
    const { data, error } = await supabase
      .from('horror_snippets')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching snippet:', error);
      return null;
    }

    return data;
  },

  // Subscribe to real-time updates
  subscribeToLeaderboard(callback: (payload: any) => void) {
    return supabase
      .channel('horror_snippets_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'horror_snippets'
        },
        callback
      )
      .subscribe();
  }
};
