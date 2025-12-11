import { horrorLeaderboardApi } from '@/lib/supabase';

// Test script to verify Supabase connection
async function testSupabaseConnection() {
  console.log('Testing Supabase connection...');
  
  try {
    const snippets = await horrorLeaderboardApi.getTopSnippets(5);
    console.log('✅ Successfully connected to Supabase!');
    console.log('Top snippets:', snippets);
    return true;
  } catch (error) {
    console.error('❌ Failed to connect to Supabase:', error);
    return false;
  }
}

// Uncomment to test in browser console:
// testSupabaseConnection();

export { testSupabaseConnection };
