export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

export function getStatusLabel(status: string): { text: string; color: string } {
  switch (status) {
    case 'completed': return { text: 'COMPLETE', color: 'var(--retro-amber)' };
    case 'in-progress': return { text: 'ACTIVE', color: 'var(--retro-cyan)' };
    case 'archived': return { text: 'ARCHIVED', color: 'oklch(55% 0.02 260)' };
    default: return { text: status.toUpperCase(), color: 'oklch(55% 0.02 260)' };
  }
}

export function getTypeLabel(type: string): string {
  switch (type) {
    case 'work': return 'FULL-TIME';
    case 'freelance': return 'FREELANCE';
    case 'startup': return 'STARTUP';
    default: return type.toUpperCase();
  }
}

export function getSkillLevelColor(level: string): string {
  switch (level) {
    case 'expert': return 'var(--retro-amber)';
    case 'advanced': return 'var(--retro-cyan)';
    case 'intermediate': return 'oklch(72% 0.02 260)';
    default: return 'oklch(55% 0.02 260)';
  }
}
