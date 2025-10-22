export interface DemoMatchState {
  /** m_iScore */
  team_rounds_total: unknown;
  /** m_bSurrendered */
  team_surrendered: unknown;
  /** m_szTeamname */
  team_name: unknown;
  /** m_scoreOvertime */
  team_score_overtime: unknown;
  /** m_szTeamMatchStat */
  team_match_stat: unknown;
  /** m_numMapVictories */
  team_num_map_victories: unknown;
  /** m_scoreFirstHalf */
  team_score_first_half: unknown;
  /** m_scoreSecondHalf */
  team_score_second_half: unknown;
  /** m_szClanTeamname */
  team_clan_name: unknown;
  /** m_bFreezePeriod */
  is_freeze_period: unknown;
  /** m_bWarmupPeriod */
  is_warmup_period: unknown;
  /** m_fWarmupPeriodEnd */
  warmup_period_end: unknown;
  /** m_fWarmupPeriodStart */
  warmup_period_start: unknown;
  /** m_bTerroristTimeOutActive */
  is_terrorist_timeout: unknown;
  /** m_bCTTimeOutActive */
  is_ct_timeout: unknown;
  /** m_flTerroristTimeOutRemaining */
  terrorist_timeout_remaining: unknown;
  /** m_flCTTimeOutRemaining */
  ct_timeout_remaining: unknown;
  /** m_nTerroristTimeOuts */
  num_terrorist_timeouts: unknown;
  /** m_nCTTimeOuts */
  num_ct_timeouts: unknown;
  /** m_bTechnicalTimeOut */
  is_technical_timeout: unknown;
  /** m_bMatchWaitingForResume */
  is_waiting_for_resume: unknown;
  /** m_fMatchStartTime */
  match_start_time: unknown;
  /** m_fRoundStartTime */
  round_start_time: unknown;
  /** m_flRestartRoundTime */
  restart_round_time: unknown;
  /** m_bGameRestart */
  is_game_restart: unknown;
  /** m_flGameStartTime */
  game_start_time: unknown;
  /** m_timeUntilNextPhaseStarts */
  time_until_next_phase_start: unknown;
  /** m_gamePhase */
  game_phase: unknown;
  /** m_totalRoundsPlayed */
  total_rounds_played: unknown;
  /** m_nRoundsPlayedThisPhase */
  rounds_played_this_phase: unknown;
  /** m_iHostagesRemaining */
  hostages_remaining: unknown;
  /** m_bAnyHostageReached */
  any_hostages_reached: unknown;
  /** m_bMapHasBombTarget */
  has_bombites: unknown;
  /** m_bMapHasRescueZone */
  has_rescue_zone: unknown;
  /** m_bMapHasBuyZone */
  has_buy_zone: unknown;
  /** m_bIsQueuedMatchmaking */
  is_matchmaking: unknown;
  /** m_nQueuedMatchmakingMode */
  match_making_mode: unknown;
  /** m_bIsValveDS */
  is_valve_dedicated_server: unknown;
  /** m_iNumGunGameProgressiveWeaponsCT */
  gungame_prog_weap_ct: unknown;
  /** m_iNumGunGameProgressiveWeaponsT */
  gungame_prog_weap_t: unknown;
  /** m_iSpectatorSlotCount */
  spectator_slot_count: unknown;
  /** m_bHasMatchStarted */
  is_match_started: unknown;
  /** m_numBestOfMaps */
  n_best_of_maps: unknown;
  /** m_bBombDropped */
  is_bomb_dropped: unknown;
  /** m_bBombPlanted */
  is_bomb_planted: unknown;
  /** m_iRoundWinStatus */
  round_win_status: unknown;
  /** m_eRoundWinReason */
  round_win_reason: unknown;
  /** m_bTCantBuy */
  terrorist_cant_buy: unknown;
  /** m_bCTCantBuy */
  ct_cant_buy: unknown;
  /** m_iNumConsecutiveCTLoses */
  ct_losing_streak: unknown;
  /** m_iNumConsecutiveTerroristLoses */
  t_losing_streak: unknown;
  /** m_flSurvivalStartTime */
  survival_start_time: unknown;
  /** m_bRoundInProgress */
  round_in_progress: unknown;
}

export type DemoGameStateProperties = keyof DemoMatchState