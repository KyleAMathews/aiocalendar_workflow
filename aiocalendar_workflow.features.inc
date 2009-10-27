<?php

/**
 * Implementation of hook_views_default_views().
 */
function aiocalendar_workflow_views_default_views() {
  module_load_include('inc', 'aiocalendar_workflow', 'aiocalendar_workflow.features.views');
  $args = func_get_args();
  return call_user_func_array('_aiocalendar_workflow_views_default_views', $args);
}
