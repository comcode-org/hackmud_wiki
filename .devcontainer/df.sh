#!/bin/bash
set -eux

echo "$@" >> df.log
df -h / >> df.log
