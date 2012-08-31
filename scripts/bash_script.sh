#!/usr/bin/env bash

usage() {
cat << EOF
Usage: printargs.sh [OPTIONS] [ARGUMENTS]
 Print the number of arguments.

OPTIONS:
 -h print help message
 -m MSG custom message

Examples:
 printargs.sh a b c
 printargs.sh -m 'Arguments count: ' a b c
 printargs.sh -h

EOF
}

while getopts “hmv:” OPTION
do
 case $OPTION in
        h)
            usage
            exit 1
            shift;;
        m)
            MESSAGE=$OPTARG
            shift;shift;;
		#verbose mode
		v)
			VERBOSE=true
			shift;;
    esac
done

COUNT=0

for ARG in $@; do
	#printing each argument
	if [[ $VERBOSE ]]; then
	echo $ARG
	fi
    let COUNT+=1
done

if [[ "$MESSAGE" != "" ]]; then
echo $MESSAGE
fi

echo $COUNT