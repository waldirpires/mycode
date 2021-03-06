#!/usr/bin/perl
use strict;
use warnings;
use POSIX;
use DateTime;
use Time::Localtime;

require 'load_functions.pl';

my $start = time;

logit("ORNG load test script\n");

my $limit = 100; # amount of ingests to process
my $count = 0; # index counter
my $numPackages = 4; # amount of packages to be selected for ingest

my $windowSize = 4; # size of window (how many interval windows there are
my @windowTime = (0, 6, 12, 20, 24); # window start/end times
my @windowRate = (2, 6, 4, 1); # amount of ingests per minute
my @selectedPkgStats = (0, 0, 0, 0);
my @selectionDistribution = (0.2, 0.5, 0.9, 1.0);

my $dt   = DateTime->now;

#print "$dt: $dt\n";
my $hour = getHour();
logit("$dt: hour: $hour\n");

my $rate = 0;
my $sleepTime = 0;
my $selectedPkgId = -1;
my $perc = 0;

for ($count = 0; $count <= $limit; $count++) {
  $perc = $count/$limit * 100;
  logit("[$count] Done: $perc %\n");
  my $hour = getHour();
  $sleepTime = getSleepTime($hour, $windowSize, \@windowTime, \@windowRate);
  my $formatted = sprintf("%2.3f", $sleepTime);
  logit("Sleep time (s): $formatted\n");
  
  $selectedPkgId = getSelectedPackageId($numPackages, \@selectionDistribution);
  $selectedPkgStats[$selectedPkgId] = $selectedPkgStats[$selectedPkgId]++;
  logit(join(", ", @selectedPkgStats));
  logit("\n\n");
  logit("Selected package ID: $selectedPkgId\n");
  logit("INGEST!!!!!\n");
  logit("=========================================\n");
  logit("Sleeping . . . - ");
  sleep $sleepTime;  
  logit("Awake!\n");
}

$dt   = DateTime->now;
logit("$dt: done!\n");
my $end   = time;

logit('Ran for ', ( $end - $start ) , " s\n");
print join(", ", @selectedPkgStats);
