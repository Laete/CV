#!/usr/bin/env perl

use strict;
use Getopt::Long;
use Pod::Usage;

my $help;
my $message = '';
my $verbose;

@ARGV and GetOptions(
    "h" => \$help,
	#verbose mode
    "v" => \$verbose,
    "m:s" => \$message,
) or pod2usage(1);
pod2usage(-verbose => 2, -exitval => 2) if $help;

my $count = 0;

foreach(@ARGV) {
	#printing each argument
    if($verbose) {
        print($_ . "\n");
    }
    $count++;
}

if($message ne "") {
    print($message . "\n");
}

print($count . "\n");

__END__

=head1 NAME

 printargs.pl - Print the number of arguments.

=head1 SYNOPSIS

 printargs.pl [options] [arguments]

=head1 OPTIONS

 -h Show help message.

 -m MSG Specify a custom message.


=head1 EXAMPLE

 printargs.sh a b c

 printargs.sh -m 'Arguments count: ' a b c

 printargs.sh -h

=cut